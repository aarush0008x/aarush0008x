"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Bot, ArrowRight, User } from "lucide-react";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
}

export const AskAarushWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "👋 Hi! I'm **Aarush's AI Assistant**. Ask me anything about his projects, 24-hour hackathons, tech stack, or get in touch!",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });
      const data = await res.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: data.reply || "I encountered an issue processing your request. Please try again!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "Unable to connect to AI engine right now. You can email Aarush directly at aarush0008x@gmail.com!",
          timestamp: "Just now",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "Tell me about nimoCode Platform",
    "What are Aarush's skills?",
    "Tell me about 24-Hr Hackathons",
    "How can I contact Aarush?",
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#242424] hover:bg-[#2C2C2C] text-[#F7F6F4] border border-[#802938]/60 shadow-2xl shadow-[#802938]/20 transition-all duration-300"
          aria-label="Ask Aarush AI"
        >
          {/* Subtle Glow Ring */}
          <div className="absolute -inset-0.5 rounded-full bg-[#802938]/30 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#802938] text-[#F7F6F4]">
            {isOpen ? <X className="w-4 h-4" /> : <Sparkles className="w-4 h-4 animate-pulse" />}
          </div>

          <span className="relative text-xs font-medium tracking-wide font-sans">
            {isOpen ? "Close AI" : "Ask Aarush AI"}
          </span>

          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </motion.button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[520px] max-h-[80vh] flex flex-col rounded-2xl bg-[#1E1E1E]/95 backdrop-blur-xl border border-[#F7F6F4]/15 shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-[#242424] border-b border-[#F7F6F4]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#802938] text-[#F7F6F4] flex items-center justify-center shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#F7F6F4] font-display flex items-center gap-2">
                    Aarush AI Assistant
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-[#9E9A93] font-mono">B.Tech AI &amp; DS · CGC University</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-[#9E9A93] hover:text-[#F7F6F4] hover:bg-[#1E1E1E] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "ai" && (
                    <div className="w-6 h-6 rounded-full bg-[#802938]/20 text-[#802938] border border-[#802938]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
                      m.sender === "user"
                        ? "bg-[#802938] text-[#F7F6F4] rounded-br-none"
                        : "bg-[#242424] text-[#D6D2CB] border border-[#F7F6F4]/10 rounded-bl-none"
                    }`}
                  >
                    {m.text}
                    <span className="block text-[9px] text-[#9E9A93] mt-1 text-right font-mono">
                      {m.timestamp}
                    </span>
                  </div>

                  {m.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-[#2C2C2C] text-[#D6D2CB] border border-[#F7F6F4]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3 h-3" />
                    </div>
                  )}
                </motion.div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 p-2 text-[11px] text-[#9E9A93] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#802938] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#802938] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#802938] animate-bounce [animation-delay:0.4s]" />
                  <span>Aarush AI is thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-3 py-2 bg-[#1E1E1E] border-t border-[#F7F6F4]/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#242424] hover:bg-[#2C2C2C] text-[10px] text-[#D6D2CB] hover:text-[#F7F6F4] border border-[#F7F6F4]/10 transition-colors shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#242424] border-t border-[#F7F6F4]/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, hackathons, skills..."
                className="flex-1 bg-[#1E1E1E] text-xs text-[#F7F6F4] placeholder-[#73706A] px-3.5 py-2.5 rounded-xl border border-[#F7F6F4]/10 focus:outline-none focus:border-[#802938] transition-colors font-sans"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2.5 rounded-xl bg-[#802938] hover:bg-[#9E3A4C] disabled:opacity-40 text-[#F7F6F4] transition-colors shrink-0"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
