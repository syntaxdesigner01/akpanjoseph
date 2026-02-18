"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("akpanjoseph2021@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText("+2348105586051");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Contact Me
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Let’s build something{" "}
              <span className="text-orange-500">extraordinary.</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Whether you have a specific project in mind or just want to chat
              about the latest in tech, I'm always open to new connections.
            </p>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              <div
                onClick={copyToClipboard}
                className="group flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-sm">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 group-hover:text-white/70 uppercase tracking-widest">
                      Email Me
                    </p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white">
                      akpanjoseph2021@gmail.com
                    </p>
                  </div>
                </div>

                {/* Copy Icon / Feedback */}
                <div className="pr-2">
                  {copied ? (
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-white/20 px-2 py-1 rounded-lg">
                      Copied!
                    </span>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div
                onClick={copyPhoneToClipboard}
                className="group flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-sm">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 group-hover:text-white/70 uppercase tracking-widest">
                      Call / WhatsApp
                    </p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white">
                      +234 810 5586 051
                    </p>
                  </div>
                </div>

                {/* Copy Icon / Feedback */}
                <div className="pr-2">
                  {phoneCopied ? (
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-white/20 px-2 py-1 rounded-lg">
                      Copied!
                    </span>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 group-hover:text-white/70 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-white">
                    Lagos, Nigeria (Remote Worldwide)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-2xl relative"
          >
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1  gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                  Your Message
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending || isSent}
                className={`w-full font-bold text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all duration-300 shadow-lg active:scale-95 ${
                  isSent
                    ? "bg-green-500 text-white"
                    : isSending
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-gray-900 hover:bg-orange-600 text-white hover:shadow-orange-500/20"
                }`}
              >
                {isSent
                  ? "Message Sent!"
                  : isSending
                    ? "Sending..."
                    : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Links - Now on its own centered line below the grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 pt-12 border-t border-gray-100 flex flex-col items-center"
        >
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-8">
            Connect & Follow My Work
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/akpanjosepho1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 group shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/syntaxdesigner"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300 group shadow-sm"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/syntaxdesigner01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300 group shadow-sm"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
