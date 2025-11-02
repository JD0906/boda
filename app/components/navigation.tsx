"use client";

import type React from "react";
import { Sun, Moon, Menu } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  menuItems: MenuItem[];
}

export default function Navigation({
  isDarkMode,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  menuItems,
}: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        isDarkMode ? "bg-black/80" : "bg-white/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-white/10" : "border-stone-200"
      }`}
      style={{
        animation: "slideDown 0.8s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-script font-light tracking-wide transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              J & J
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-serif font-light tracking-wide transition-all duration-300 hover:scale-105 relative ${
                    isDarkMode
                      ? "text-white/70 hover:text-white"
                      : "text-stone-600 hover:text-black"
                  } ${
                    activeSection === item.id
                      ? isDarkMode
                        ? "text-white"
                        : "text-black"
                      : ""
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        isDarkMode ? "bg-white" : "bg-stone-800"
                      } transform origin-center animate-pulse`}
                      style={{
                        animation: "scaleX 0.3s ease-out",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                isDarkMode
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
              style={{
                animation: "fadeInUp 0.6s ease-out 0.3s both",
              }}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300" />
              )}
            </button> */}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.4s both",
                }}
              >
                <Menu
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } border-t ${
          isDarkMode
            ? "border-white/10 bg-black/90"
            : "border-stone-200 bg-white/90"
        } backdrop-blur-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-3 w-full px-3 py-2 text-sm font-serif font-light tracking-wide transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "text-white/70 hover:text-white hover:bg-white/5"
                    : "text-stone-600 hover:text-black hover:bg-stone-50"
                } rounded-lg ${
                  activeSection === item.id
                    ? isDarkMode
                      ? "bg-white/10"
                      : "bg-stone-100"
                    : ""
                }`}
                style={{
                  animation: isMenuOpen
                    ? `slideInLeft 0.4s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                <IconComponent className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
