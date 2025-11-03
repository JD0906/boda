"use client";

import type React from "react";

interface HeroProps {
  isDarkMode: boolean;
  isVideoPlaying: boolean;
}

export default function Hero({ isDarkMode, isVideoPlaying }: HeroProps) {
  return (
    <section
      id="home"
      data-section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Overlay para mejor visibilidad, más oscuro en modo claro */}
      <div className="absolute inset-0 pointer-events-none">
        {isDarkMode ? (
          <>
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
          </>
        ) : (
          <>
            {/* Capa blanca con MÁS opacidad y más blur para mejor contraste de texto en modo claro */}
            <div className="absolute inset-0 bg-white/55 backdrop-blur-[4px]" />
            {/* Gradiente sutil para profundidad y legibilidad, más opaco */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/50" />
          </>
        )}
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="/video.MOV"
          autoPlay={isVideoPlaying}
          loop
          muted
          playsInline
          preload="auto"
          style={{
            transition: "opacity 0.7s",
            opacity: isVideoPlaying
              ? isDarkMode
                ? 0.35
                : 0.7 // más oscuro en claro
              : isDarkMode
              ? 0.25
              : 0.12,
            filter: isDarkMode
              ? "brightness(0.9) saturate(1.05) contrast(1.02)"
              : "brightness(0.92) saturate(1.05) contrast(1.08)",
          }}
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <p
          className={`text-lg md:text-lg font-serif font-light tracking-[0.4em] mb-8 uppercase ${"text-white/80"}`}
          style={{
            animation: "fadeInUp 0.8s ease-out 0.5s both",
          }}
        >
          Nuestra Boda
        </p>

        <h1
          className={`text-6xl md:text-6xl lg:text-8xl font-script font-extralight tracking-wider mb-12 leading-none ${"text-white"}`}
          style={{
            animation: "fadeInUp 1s ease-out 0.8s both",
            textShadow: isDarkMode
              ? "0 2px 12px rgba(0,0,0,0.25)"
              : "0 2px 12px rgba(255,255,255,0.25), 0 1px 0 rgba(0,0,0,0.08)",
          }}
        >
          Juan & Joss
        </h1>
      </div>
    </section>
  );
}
