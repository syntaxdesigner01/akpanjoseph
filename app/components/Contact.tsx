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
              <a
                href="mailto:akpanjoseph2021@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
              >
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
              </a>

              <div className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300">
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
      </div>
    </section>
  );
}
