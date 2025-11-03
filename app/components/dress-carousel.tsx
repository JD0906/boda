"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DressCarouselProps {
  isDarkMode: boolean;
  visibleSections: Set<string>;
}

const dressImages = [
  "/images/casona1.jpeg",
  "/images/casona2.jpeg",
  "/images/casona3.jpeg",
  "/images/casona4.jpeg",
  "/images/casona5.jpeg",
  "/images/casona6.jpeg",
];

export default function DressCarousel({
  isDarkMode,
  visibleSections,
}: DressCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dressImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? dressImages.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === dressImages.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {dressImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                width={1200}
                height={800}
                src={image}
                alt={`Dress example ${index + 1}`}
                className="w-full h-96 md:h-[500px] object-cover object-center"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10"
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {dressImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? isDarkMode
                  ? "bg-stone-300"
                  : "bg-stone-600"
                : isDarkMode
                ? "bg-stone-600"
                : "bg-stone-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
