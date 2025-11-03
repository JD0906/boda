"use client";

import { useMemo, useRef, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  id: number;
  path: string;
}

interface ImageCarouselProps {
  isDarkMode: boolean;
  carouselImages: CarouselImage[];
}

export default function ImageCarousel({
  isDarkMode,
  carouselImages,
}: ImageCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Duplicar las imágenes para crear el loop infinito perfecto
  const loopImages = useMemo(
    () => [...carouselImages, ...carouselImages],
    [carouselImages]
  );

  // Duración de la animación en segundos
  const animationDuration = carouselImages.length * 5;

  // Iniciar animación
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Esperar a que el contenedor esté completamente renderizado
    const startAnimation = () => {
      // Verificar que el contenedor tenga un ancho válido
      if (container.scrollWidth === 0) {
        animationRef.current = requestAnimationFrame(startAnimation);
        return;
      }

      let startTime: number | null = null;

      let lastProgress = 0;

      const animate = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
          lastProgress = 0;
        }

        const elapsed = (timestamp - startTime) / 1000; // en segundos
        const progress = (elapsed % animationDuration) / animationDuration;

        // Obtener el ancho de una copia completa en píxeles
        const oneCopyWidth = container.scrollWidth / 2;

        // Detectar cuando hemos completado un ciclo (progress vuelve de ~1.0 a ~0.0)
        // Esto sucede cuando el módulo hace que progress vuelva a 0 después de llegar cerca de 1
        const hasCompletedCycle =
          progress < lastProgress && lastProgress > 0.95;

        if (hasCompletedCycle) {
          // Reposicionar instantáneamente al inicio (que visualmente es idéntico
          // porque estamos mostrando la segunda copia que es igual a la primera)
          container.style.transition = "none";
          container.style.transform = `translateX(0)`;
          // Resetear el tiempo para que el siguiente ciclo comience desde el inicio
          const remainingTime = (elapsed % animationDuration) * 1000;
          startTime = timestamp - remainingTime;
          lastProgress = 0;
          // Continuar el loop
          animationRef.current = requestAnimationFrame(animate);
          return;
        }

        // Calcular la posición: mover desde 0 hasta el ancho de una copia completa
        const currentTranslate = -oneCopyWidth * progress;

        // Aplicar la transformación normalmente
        container.style.transition = "none";
        container.style.transform = `translateX(${currentTranslate}px)`;

        lastProgress = progress;
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    // Dar tiempo adicional para que todo esté completamente listo
    const timeoutId = setTimeout(() => {
      startAnimation();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [carouselImages.length, animationDuration]);

  return (
    <div
      className={`w-full relative overflow-hidden ${
        isDarkMode ? "bg-neutral-900" : "bg-stone-100"
      }`}
      style={{
        minHeight: "300px",
        maxHeight: "50rem",
        height: "70vw",
      }}
    >
      <div ref={scrollContainerRef} className="flex h-full">
        {loopImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex-shrink-0 w-1/2 md:w-1/3 h-full"
          >
            <Image
              width={1200}
              height={800}
              alt={image.path}
              src={image.path}
              className="w-full h-full object-cover select-none"
              loading="lazy"
              quality={75}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
