"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Heart, Calendar, Users, Gift } from "lucide-react";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Story from "./components/story";
import ImageCarousel from "./components/image-carousel";
import ContentCards from "./components/content-cards";
import Counter from "./components/counter";

export default function WeddingLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVideoPlaying, _setIsVideoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [activeSection, setActiveSection] = useState("home");

  const observerRef = useRef<IntersectionObserver | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const menuItems = [
    { id: "home", label: "Inicio", icon: Heart },
    { id: "story", label: "Historia", icon: Users },
    { id: "location", label: "Detalles", icon: Calendar },
    { id: "gift", label: "Mesa de Regalos", icon: Gift },
    { id: "rsvp", label: "Asistencia", icon: Heart },
  ];

  const carouselImages = [
    {
      id: 1,
      path: "/images/sesion10.jpg",
    },
    {
      id: 2,
      path: "/images/sesion14.jpg",
    },
    {
      id: 3,
      path: "/images/sesion9.jpg",
    },
    {
      id: 4,
      path: "/images/sesion16.jpg",
    },
  ];

  useEffect(() => {
    const weddingDate = new Date("2026-01-24T15:30:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const playAudio = async () => {
      if (!audioRef.current) return;

      try {
        audioRef.current.volume = 0.3;
        audioRef.current.loop = true;
        await audioRef.current.play();
        console.log("Audio started automatically");
      } catch {
        // Autoplay falló, espera interacción del usuario
        const handleUserInteraction = async () => {
          if (!audioRef.current) return;
          try {
            await audioRef.current.play();
            console.log("Audio started after user interaction");

            // Remover listeners después de reproducir
            document.removeEventListener("click", handleUserInteraction);
            document.removeEventListener("touchstart", handleUserInteraction);
            document.removeEventListener("keydown", handleUserInteraction);
            document.removeEventListener("mousemove", handleUserInteraction);
            document.removeEventListener("scroll", handleUserInteraction);
          } catch (err) {
            console.log("Audio play failed:", err);
          }
        };

        // Agregar listeners para cualquier interacción
        document.addEventListener("click", handleUserInteraction, {
          once: true,
        });
        document.addEventListener("touchstart", handleUserInteraction, {
          once: true,
        });
        document.addEventListener("keydown", handleUserInteraction, {
          once: true,
        });
        document.addEventListener("mousemove", handleUserInteraction, {
          once: true,
        });
        document.addEventListener("scroll", handleUserInteraction, {
          once: true,
          passive: true,
        });
      }
    };

    playAudio();
  }, []);

  // Intersection Observer for animations and active section
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px" }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-black" : "bg-stone-50"
      }`}
    >
      {/* Navigation Menu */}
      <Navigation
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuItems={menuItems}
      />

      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="/cancion.mp3" type="audio/mp3" />
      </audio>

      {/* Hero Section with Video */}
      <Hero isDarkMode={isDarkMode} isVideoPlaying={isVideoPlaying} />

      <div
        className={`px-4 py-16 transition-colors duration-500 ${
          isDarkMode ? "bg-black" : "bg-stone-50"
        }`}
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <Story isDarkMode={isDarkMode} visibleSections={visibleSections} />
        </div>
      </div>

      {/* Image Carousel */}
      <ImageCarousel isDarkMode={isDarkMode} carouselImages={carouselImages} />

      {/* Content Cards */}
      <ContentCards isDarkMode={isDarkMode} visibleSections={visibleSections} />

      <Counter isDarkMode={isDarkMode} timeLeft={timeLeft} />

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}
