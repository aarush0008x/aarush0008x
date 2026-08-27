"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 p-6 sm:p-8 shadow-sm">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-10 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#802938]/20 text-[#802938] border border-[#802938]/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#F7F6F4] font-display mb-2">
              Message Transmitted Successfully
            </h4>
            <p className="text-sm text-[#D6D2CB] max-w-md mx-auto mb-2 leading-relaxed">
              Thank you for reaching out! Your message has been delivered to <strong className="text-[#F7F6F4]">aarush0008x@gmail.com</strong>.
            </p>
            <p className="text-xs font-mono text-[#802938] mb-6">
              ✓ An automated confirmation with a copy of your message has been sent to your email.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-5 py-2 rounded-xl bg-[#1E1E1E] hover:bg-[#2C2C2C] text-xs font-mono text-[#F7F6F4] border border-[#F7F6F4]/10 transition-colors"
            >
              Send Another Note
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="w-full space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-wider text-[#9E9A93] mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Rivera"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#F7F6F4]/10 text-sm text-[#F7F6F4] placeholder-[#73706A] focus:border-[#802938] focus:bg-[#202020] transition-colors outline-none block"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#9E9A93] mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#F7F6F4]/10 text-sm text-[#F7F6F4] placeholder-[#73706A] focus:border-[#802938] focus:bg-[#202020] transition-colors outline-none block"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="subject"
                className="block text-xs font-mono uppercase tracking-wider text-[#9E9A93] mb-2"
              >
                Subject / Topic
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration, Hackathon Sprint, or Role"
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#F7F6F4]/10 text-sm text-[#F7F6F4] placeholder-[#73706A] focus:border-[#802938] focus:bg-[#202020] transition-colors outline-none block"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-[#9E9A93] mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your idea, project, or requirements..."
                className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#F7F6F4]/10 text-sm text-[#F7F6F4] placeholder-[#73706A] focus:border-[#802938] focus:bg-[#202020] transition-colors outline-none resize-none block"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-800/50 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#802938] hover:bg-[#9E3A4C] disabled:opacity-60 text-[#F7F6F4] text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 border border-[#802938]/40 shadow-sm"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
