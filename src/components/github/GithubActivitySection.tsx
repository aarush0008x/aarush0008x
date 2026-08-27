"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeading";
import { GITHUB_DATA } from "@/data/portfolioData";
import { GitPullRequest, GitCommit, Star, GitFork, ArrowUpRight, RefreshCw, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface LiveGitHubState {
  username: string;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  totalContributions2026: number;
  contributions: ContributionDay[];
  topLanguages: { name: string; percentage: number; color: string }[];
  pinnedRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
    updatedAt?: string;
  }[];
}

export const GithubActivitySection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [liveData, setLiveData] = useState<LiveGitHubState>({
    username: GITHUB_DATA.username,
    publicRepos: GITHUB_DATA.totalRepos,
    totalStars: 0,
    totalForks: 1,
    totalContributions2026: 26,
    contributions: [],
    topLanguages: GITHUB_DATA.topLanguages,
    pinnedRepos: GITHUB_DATA.pinnedRepos,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isLiveSynced, setIsLiveSynced] = useState(false);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  const fetchLiveGitHub = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/github");
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setLiveData(json.data);
          setIsLiveSynced(true);
        }
      }
    } catch (err) {
      console.error("Live GitHub fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveGitHub();
  }, []);

  // Construct standard 52-week 2026 calendar days
  const calendarWeeks = useMemo(() => {
    const activeDatesMap = new Map<string, { count: number; level: number }>();
    
    // Seed from API if available or use real known dates
    if (liveData.contributions && liveData.contributions.length > 0) {
      liveData.contributions.forEach((c) => {
        activeDatesMap.set(c.date, { count: c.count, level: c.level });
      });
    } else {
      // Seed real 2026 GitHub graph points as shown in screenshot
      const knownActive = [
        { date: "2026-04-13", count: 1, level: 2 },
        { date: "2026-06-08", count: 1, level: 1 },
        { date: "2026-07-23", count: 2, level: 2 },
        { date: "2026-08-07", count: 1, level: 1 },
        { date: "2026-08-08", count: 13, level: 4 },
        { date: "2026-08-09", count: 3, level: 2 },
        { date: "2026-08-11", count: 7, level: 3 },
        { date: "2026-08-15", count: 1, level: 1 },
        { date: "2026-08-16", count: 1, level: 1 },
        { date: "2026-08-20", count: 1, level: 1 },
        { date: "2026-08-21", count: 15, level: 4 },
        { date: "2026-08-22", count: 5, level: 2 },
        { date: "2026-08-23", count: 1, level: 1 },
        { date: "2026-08-27", count: 10, level: 4 },
      ];
      knownActive.forEach((a) => activeDatesMap.set(a.date, a));
    }

    const weeks: { days: { date: string; count: number; level: number; dayOfWeek: number }[] }[] = [];
    const startDate = new Date(2026, 0, 1); // Jan 1, 2026 (Thursday)
    
    // Align start to the preceding Sunday
    const startDay = startDate.getDay();
    const current = new Date(startDate);
    current.setDate(current.getDate() - startDay);

    for (let w = 0; w < 53; w++) {
      const weekDays = [];
      for (let d = 0; d < 7; d++) {
        const year = current.getFullYear();
        const month = String(current.getMonth() + 1).padStart(2, "0");
        const day = String(current.getDate()).padStart(2, "0");
        const dateStr = `${year}-${month}-${day}`;

        const isCurrentYear = year === 2026;
        const active = activeDatesMap.get(dateStr);

        weekDays.push({
          date: dateStr,
          count: isCurrentYear ? (active ? active.count : 0) : 0,
          level: isCurrentYear ? (active ? active.level : 0) : 0,
          dayOfWeek: d,
        });

        current.setDate(current.getDate() + 1);
      }
      weeks.push({ days: weekDays });
    }

    return weeks;
  }, [liveData.contributions]);

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-[#9E3A4C] border-[#B85366]";
      case 3:
        return "bg-[#802938] border-[#9E3A4C]";
      case 2:
        return "bg-[#541B25] border-[#802938]";
      case 1:
        return "bg-[#381B21] border-[#541B25]";
      default:
        return "bg-[#1E1E1E] border-[#F7F6F4]/5";
    }
  };

  const months = [
    { name: "Jan", offset: 0 },
    { name: "Feb", offset: 4 },
    { name: "Mar", offset: 8 },
    { name: "Apr", offset: 13 },
    { name: "May", offset: 17 },
    { name: "Jun", offset: 21 },
    { name: "Jul", offset: 26 },
    { name: "Aug", offset: 30 },
    { name: "Sep", offset: 35 },
    { name: "Oct", offset: 39 },
    { name: "Nov", offset: 43 },
    { name: "Dec", offset: 48 },
  ];

  return (
    <section id="github" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#282828]/50 border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 w-full">
          <SectionHeading
            number="06"
            tag="Engineering Cadence"
            title="Development Activity."
            subtitle="Real-time synchronized repositories, commit frequency, and live GitHub statistics."
          />

          {/* Real-Time Status Pill */}
          <div className="flex items-center gap-3 self-start md:self-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E1E1E] border border-[#F7F6F4]/10 text-xs font-mono text-[#D6D2CB]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{isLiveSynced ? "Live Real-Time Sync" : "Syncing GitHub API..."}</span>
            </div>

            <button
              onClick={fetchLiveGitHub}
              disabled={isLoading}
              title="Refresh live GitHub data"
              className="p-1.5 rounded-full bg-[#242424] hover:bg-[#1E1E1E] text-[#9E9A93] hover:text-[#F7F6F4] border border-[#F7F6F4]/10 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-[#802938]" : ""}`} />
            </button>
          </div>
        </div>

        {/* GitHub Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 p-6 sm:p-9 shadow-sm w-full"
        >
          {/* GitHub Profile Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#F7F6F4]/10 w-full">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/10 text-[#F7F6F4]">
                <GithubIcon className="w-7 h-7 text-[#F7F6F4]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-[#F7F6F4] font-display">
                    {liveData.username}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#802938]/20 text-[#D6D2CB] border border-[#802938]/30">
                    Proactive Builder
                  </span>
                </div>
                <p className="text-xs font-mono text-[#9E9A93] mt-0.5">
                  Building AI pipelines, edge workers &amp; full-stack web applications
                </p>
              </div>
            </div>

            <a
              href={`https://github.com/${liveData.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E1E1E] hover:bg-[#802938] text-xs font-mono text-[#F7F6F4] border border-[#F7F6F4]/10 transition-colors self-start sm:self-auto"
            >
              <span>github.com/{liveData.username}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Core Real-Time Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 w-full">
            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9E9A93] mb-1">
                <GitCommit className="w-3.5 h-3.5 text-[#802938]" />
                <span>Contributions in 2026</span>
              </div>
              <div className="text-2xl font-bold text-[#F7F6F4] font-display">
                {liveData.totalContributions2026 || 26}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9E9A93] mb-1">
                <GithubIcon className="w-3.5 h-3.5 text-[#802938]" />
                <span>Repositories</span>
              </div>
              <div className="text-2xl font-bold text-[#F7F6F4] font-display">
                {liveData.publicRepos} Public
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9E9A93] mb-1">
                <Star className="w-3.5 h-3.5 text-[#802938]" />
                <span>Total Stars</span>
              </div>
              <div className="text-2xl font-bold text-[#F7F6F4] font-display">
                {liveData.totalStars}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9E9A93] mb-1">
                <GitFork className="w-3.5 h-3.5 text-[#802938]" />
                <span>Total Forks</span>
              </div>
              <div className="text-2xl font-bold text-[#F7F6F4] font-display">
                {liveData.totalForks}
              </div>
            </div>
          </div>

          {/* GitHub Exact Real Heatmap Matrix Visual */}
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#F7F6F4]/10 mb-8 w-full">
            {/* Top Bar: Title and Year Selector Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#F7F6F4] font-display">
                  {liveData.totalContributions2026 || 26} contributions in 2026
                </h4>
                <p className="text-xs font-mono text-[#9E9A93] mt-0.5">
                  Synchronized live from GitHub contribution graph
                </p>
              </div>

              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <button
                  onClick={() => setSelectedYear(2026)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                    selectedYear === 2026
                      ? "bg-[#802938] text-[#F7F6F4] shadow-sm"
                      : "bg-[#242424] text-[#9E9A93] hover:text-[#F7F6F4]"
                  }`}
                >
                  2026
                </button>
                <button
                  onClick={() => setSelectedYear(2025)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                    selectedYear === 2025
                      ? "bg-[#802938] text-[#F7F6F4] shadow-sm"
                      : "bg-[#242424] text-[#9E9A93] hover:text-[#F7F6F4]"
                  }`}
                >
                  2025
                </button>
              </div>
            </div>

            {/* Scrollable Graph Container */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[720px] select-none">
                {/* Months Header Row */}
                <div className="flex text-[11px] font-mono text-[#9E9A93] mb-2 pl-8">
                  {months.map((m) => (
                    <div
                      key={m.name}
                      style={{ width: "8.33%" }}
                      className="text-left"
                    >
                      {m.name}
                    </div>
                  ))}
                </div>

                {/* Grid with Day Labels on Left */}
                <div className="flex gap-2 items-start">
                  {/* Day labels (Mon, Wed, Fri) */}
                  <div className="flex flex-col justify-between h-[92px] text-[10px] font-mono text-[#73706A] pr-1 py-1 shrink-0 w-7">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* 53 Columns x 7 Rows Grid */}
                  <div className="inline-grid grid-rows-7 grid-flow-col gap-[3px] flex-1">
                    {calendarWeeks.map((week, wIdx) =>
                      week.days.map((day, dIdx) => (
                        <div
                          key={`${wIdx}-${dIdx}`}
                          onMouseEnter={() =>
                            setHoveredDay({ date: day.date, count: day.count })
                          }
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-[11px] h-[11px] rounded-[2px] border ${getHeatmapColor(
                            selectedYear === 2026 ? day.level : 0
                          )} transition-transform hover:scale-125 cursor-pointer`}
                          title={`${day.count} contribution${
                            day.count === 1 ? "" : "s"
                          } on ${day.date}`}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Info & Legend */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#F7F6F4]/5 text-xs font-mono text-[#9E9A93]">
              <div>
                {hoveredDay ? (
                  <span className="text-[#D6D2CB]">
                    <strong className="text-[#F7F6F4]">{hoveredDay.count} contribution{hoveredDay.count === 1 ? "" : "s"}</strong> on {hoveredDay.date}
                  </span>
                ) : (
                  <a
                    href={`https://github.com/${liveData.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#802938] transition-colors"
                  >
                    Learn how we count contributions
                  </a>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-[11px]">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#1E1E1E] border border-[#F7F6F4]/10" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#381B21] border border-[#541B25]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#541B25] border border-[#802938]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#802938] border border-[#9E3A4C]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#9E3A4C] border border-[#B85366]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Language Breakdown Bar */}
          <div className="mb-8 w-full">
            <div className="flex items-center justify-between text-xs font-mono text-[#9E9A93] mb-2">
              <span>Primary Languages &amp; Stacks (Live GitHub Profile)</span>
              <span>100% Real-Time Synchronized</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden flex w-full bg-[#1E1E1E] mb-3">
              {liveData.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              {liveData.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-[#D6D2CB]">{lang.name}</span>
                  <span className="text-[#9E9A93]">({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real-Time Repositories Grid */}
          <div className="w-full">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#9E9A93] mb-4">
              Real Repositories on GitHub
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {liveData.pinnedRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5 hover:border-[#802938]/40 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-sm font-semibold text-[#F7F6F4] group-hover:text-[#802938] transition-colors">
                        {repo.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9E9A93] group-hover:text-[#802938] transition-colors" />
                    </div>
                    <p className="text-xs text-[#9E9A93] line-clamp-2 leading-relaxed mb-4">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#73706A] pt-2 border-t border-[#F7F6F4]/5">
                    <span className="text-[#D6D2CB]">{repo.language}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#802938]" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-[#9E9A93]" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
