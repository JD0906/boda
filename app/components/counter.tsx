"use client";

import type React from "react";
import { Calendar } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeroProps {
  isDarkMode: boolean;
  timeLeft: TimeLeft;
}

export default function Counter({ isDarkMode, timeLeft }: HeroProps) {
  return (
    <section
      id="counter"
      data-section
      className="relative flex flex-col items-center justify-center overflow-hidden py-10"
    >
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <div
          className="flex items-center justify-center space-x-6 mb-8"
          style={{
            animation: "fadeInUp 0.8s ease-out 1.1s both",
          }}
        >
          <div
            className={`w-16 h-px animate-pulse ${
              isDarkMode ? "bg-white/60" : "bg-stone-700/60"
            }`}
          ></div>
          <Calendar
            className={`w-5 h-5 animate-pulse ${
              isDarkMode ? "text-white/80" : "text-stone-700/80"
            }`}
          />
          <div
            className={`w-16 h-px animate-pulse ${
              isDarkMode ? "bg-white/60" : "bg-stone-700/60"
            }`}
          ></div>
        </div>

        <p
          className={`text-lg md:text-xl font-serif font-light tracking-[0.2em] mb-12 ${
            isDarkMode ? "text-white" : "text-stone-900"
          }`}
          style={{
            animation: "fadeInUp 0.8s ease-out 1.3s both",
            textShadow: isDarkMode
              ? "0 1px 6px rgba(0,0,0,0.18)"
              : "0 1px 6px rgba(255,255,255,0.18), 0 1px 0 rgba(0,0,0,0.06)",
          }}
        >
          Enero 24, 2026
        </p>

        {/* Animated Countdown */}
        <div
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto"
          style={{
            animation: "fadeInUp 0.8s ease-out 1.5s both",
          }}
        >
          {[
            { value: timeLeft.days, label: "Días" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Seg" },
          ].map((item) => (
            <div key={item.label} className="text-center group">
              <div
                className={`text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-2 tabular-nums transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                style={{
                  textShadow: isDarkMode
                    ? "0 1px 4px rgba(0,0,0,0.18)"
                    : "0 1px 4px rgba(255,255,255,0.18), 0 1px 0 rgba(0,0,0,0.06)",
                }}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div
                className={`text-xs md:text-sm font-serif font-light tracking-[0.3em] uppercase ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
