const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

function generateResume() {
  const doc = new PDFDocument({
    margin: 40,
    size: "A4",
    bufferPages: true,
  });

  const outputDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, "Aarush_Singh_Resume.pdf");
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const colors = {
    primary: "#2C2C2C",
    accent: "#802938",
    secondary: "#4A4A4A",
    muted: "#666666",
    lightLine: "#D6D2CB",
  };

  // Header
  doc
    .fontSize(24)
    .font("Helvetica-Bold")
    .fillColor(colors.primary)
    .text("AARUSH SINGH", { align: "center" });

  doc
    .fontSize(10.5)
    .font("Helvetica-Bold")
    .fillColor(colors.accent)
    .text("B.Tech in Artificial Intelligence & Data Science · CGC University", {
      align: "center",
    });

  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.muted)
    .text(
      "Email: aarush0008x@gmail.com  |  GitHub: github.com/aarush0008x  |  LinkedIn: linkedin.com/in/aarush-singh-4b3a20358/  |  Mohali, Punjab",
      { align: "center" }
    );

  doc.moveDown(0.6);

  function drawSectionHeader(title) {
    doc.moveDown(0.4);
    const y = doc.y;
    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .fillColor(colors.accent)
      .text(title.toUpperCase(), 40, y);

    doc
      .strokeColor(colors.lightLine)
      .lineWidth(0.8)
      .moveTo(40, y + 15)
      .lineTo(555, y + 15)
      .stroke();

    doc.y = y + 20;
  }

  // Summary
  drawSectionHeader("Professional Summary");
  doc
    .fontSize(9)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text(
      "Motivated B.Tech Artificial Intelligence and Data Science student at CGC University with hands-on engineering experience in full-stack web applications, edge AI integrations (Cloudflare Workers AI), digital forensics cryptographic backends, and developer tooling. Proven track record in national hackathons (CypherVerse, HackNWin 3.0) with strong technical communication and agile problem-solving.",
      { align: "justify", lineGap: 2 }
    );

  // Education
  drawSectionHeader("Education");
  doc
    .fontSize(9.5)
    .font("Helvetica-Bold")
    .fillColor(colors.primary)
    .text("Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science", 40, doc.y, { continued: true })
    .font("Helvetica")
    .fillColor(colors.muted)
    .text("       2023 — 2027 (Expected)", { align: "right" });

  doc
    .fontSize(8.5)
    .font("Helvetica-Bold")
    .fillColor(colors.secondary)
    .text("CGC University (Chandigarh Group of Colleges)")
    .font("Helvetica")
    .fillColor(colors.muted)
    .text("Mohali, Punjab, India  ·  Specialization: Machine Learning, Deep Learning, Data Structures & Algorithms");

  // Technical Skills
  drawSectionHeader("Technical Skills & Tools Matrix");
  const skillList = [
    { label: "Programming Languages", val: "Python, C++, C, Java, HTML, CSS, JavaScript, TypeScript, SQL" },
    { label: "Design & Media", val: "UI/UX Design, Poster Making, Graphic Design, AI Prompt Engineering, Reels Creation" },
    { label: "Tools & Ecosystem", val: "VS Code, Git, GitHub, Canva, Ollama, Antigravity, Cloudflare Workers, Vercel" },
    { label: "Core Concepts", val: "Logic Building, Data Structures (DSA), Object-Oriented Programming (Java), Modern React" },
    { label: "Soft Skills", val: "Leadership, Technical Communication, Teamwork, Logical Reasoning" },
  ];

  skillList.forEach((s) => {
    doc
      .fontSize(8.5)
      .font("Helvetica-Bold")
      .fillColor(colors.primary)
      .text(`•  ${s.label}: `, { continued: true })
      .font("Helvetica")
      .fillColor(colors.secondary)
      .text(s.val, { lineGap: 1.5 });
  });

  // Key Projects
  drawSectionHeader("Key Engineering Projects");

  const projects = [
    {
      name: "BodhAI — Cross-Platform AI Companion & Terminal CLI",
      link: "github.com/aarush0008x/BodhAI",
      tech: "Python, TypeScript, Cloudflare Workers AI, FastAPI, SQLite, PWA",
      points: [
        "Architected multi-surface AI companion supporting Windows, macOS, Linux, iOS, and Android (Termux/PWA).",
        "Engineered edge routing over Cloudflare Workers AI (Llama 3.1 8B) with sub-150ms latency and local Ollama fallback.",
        "Integrated real-time live web search synthesis and instant worldwide share links (/share).",
      ],
    },
    {
      name: "EvidenceLedger — Digital Forensics Evidence Ledger & Sanitization Backend",
      link: "github.com/aarush0008x/EvidenceLedger",
      tech: "Python, FastAPI, SQLAlchemy, MySQL, Pytest, Docker, Cryptography",
      points: [
        "Developed tamper-evident forensics management backend with cryptographic SHA-256 hash-chained audit logging.",
        "Integrated automated RAW disk file carving algorithms and policy gates enforcing NIST SP 800-88 compliance.",
        "Engineered comprehensive 25-suite automated Pytest test harness verifying zero unauthorized sanitization.",
      ],
    },
    {
      name: "nimoCode — Public Subdomain & DNS Edge Routing Platform",
      link: "github.com/aarush0008x/nimoCode",
      tech: "TypeScript, React, Vite, Next.js, Cloudflare Workers, Turborepo",
      points: [
        "Built developer infrastructure platform managing automated edge DNS record delegation and subdomain proxying.",
        "Engineered high-performance web interface using React, TypeScript, and Vite during hackathon sprint.",
      ],
    },
    {
      name: "SmartDrobe — Computer Vision Wardrobe Assistant",
      link: "github.com/aarush0008x/smartdrobe",
      tech: "TypeScript, React, Next.js, Tailwind CSS, Python",
      points: [
        "Designed smart wardrobe cataloging engine with color harmonization heuristics and outfit recommendations.",
      ],
    },
  ];

  projects.forEach((proj) => {
    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .fillColor(colors.primary)
      .text(proj.name, 40, doc.y, { continued: true })
      .font("Helvetica-Oblique")
      .fillColor(colors.accent)
      .text(`  [${proj.link}]`, { align: "right" });

    doc
      .fontSize(8)
      .font("Helvetica-Bold")
      .fillColor(colors.muted)
      .text(`Tech: ${proj.tech}`);

    proj.points.forEach((pt) => {
      doc
        .fontSize(8.5)
        .font("Helvetica")
        .fillColor(colors.secondary)
        .text(`   -  ${pt}`, { lineGap: 1 });
    });
    doc.moveDown(0.3);
  });

  // Hackathons & Competitions
  drawSectionHeader("Hackathons & Competitive Experience");

  const hackathons = [
    {
      title: "CypherVerse Hackathon",
      sub: "Project: nimoCode",
      tech: "React · TypeScript · Vite",
      period: "2024",
      desc: "Built and contributed to nimoCode during CypherVerse. Gained hands-on experience in collaborative development, rapid problem-solving, and shipping a working web application within time constraints.",
    },
    {
      title: "HackNWin 3.0 (National Hackathon)",
      sub: "Project: Arogya AI",
      tech: "React · Next.js · TypeScript · AI · Tailwind CSS",
      period: "2024",
      desc: "Built Arogya AI, an AI-focused web application under 36-hour hackathon constraints. Gained practical experience in rapid development, AI solution prototyping, and live deployment (arogya-bice.vercel.app).",
    },
  ];

  hackathons.forEach((h) => {
    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .fillColor(colors.primary)
      .text(`${h.title} — ${h.sub}`, 40, doc.y, { continued: true })
      .font("Helvetica")
      .fillColor(colors.muted)
      .text(`       ${h.period}`, { align: "right" });

    doc
      .fontSize(8)
      .font("Helvetica-Bold")
      .fillColor(colors.accent)
      .text(`Stack: ${h.tech}`);

    doc
      .fontSize(8.5)
      .font("Helvetica")
      .fillColor(colors.secondary)
      .text(`   -  ${h.desc}`, { lineGap: 1 });
    doc.moveDown(0.3);
  });

  // Certificates & Awards
  drawSectionHeader("Certificates & Achievements");
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text(
      "• Basics in Python Programming  |  • Introduction to Generative AI  |  • Essentials English  |  • AI Prompt Engineering",
      { align: "center", lineGap: 2 }
    );

  // Core Strengths & Interests
  drawSectionHeader("Core Professional Strengths & Hobbies");
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(colors.secondary)
    .text(
      "• Strengths: Leadership, Technical Communication, Teamwork, Logical Reasoning\n• Interests: Creative Reels Creation, Watching Movies & Series, Public Speaking & Presentation",
      { align: "center", lineGap: 2 }
    );

  doc.end();

  writeStream.on("finish", () => {
    console.log("✓ Resume PDF generated successfully at:", outputPath);
  });
}

generateResume();
