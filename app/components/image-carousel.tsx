"use client";

import { useMemo, useRef, useEffect, useState } from "react";
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadingCheckRef = useRef(false);

  // Duplicar las imágenes para crear el loop infinito perfecto
  const loopImages = useMemo(
    () => [...carouselImages, ...carouselImages],
    [carouselImages]
  );

  // Duración de la animación en segundos
  const animationDuration = carouselImages.length * 5;

  // Manejar la carga de imágenes - solo una vez al montar
  useEffect(() => {
    // Evitar ejecuciones múltiples
    if (loadingCheckRef.current) return;
    loadingCheckRef.current = true;

    setImagesLoaded(false);

    let timeoutId: NodeJS.Timeout;
    let finalTimeoutId: NodeJS.Timeout;
    let cleanupFunctions: Array<() => void> = [];

    const checkImagesLoaded = () => {
      const images = scrollContainerRef.current?.querySelectorAll("img");
      if (!images || images.length === 0) {
        // Si no hay imágenes, esperar un poco más y volver a intentar
        timeoutId = setTimeout(() => {
          if (scrollContainerRef.current) {
            checkImagesLoaded();
          } else {
            setImagesLoaded(true);
          }
        }, 200);
        return;
      }

      const totalImages = images.length;
      let loadedCount = 0;
      let isCompleted = false;

      const handleComplete = () => {
        if (isCompleted) return;
        isCompleted = true;
        finalTimeoutId = setTimeout(() => {
          setImagesLoaded(true);
        }, 300);
      };

      const handleImageLoad = () => {
        if (isCompleted) return;
        loadedCount++;
        if (loadedCount === totalImages) {
          handleComplete();
        }
      };

      const handleImageError = () => {
        if (isCompleted) return;
        loadedCount++;
        if (loadedCount === totalImages) {
          handleComplete();
        }
      };

      // Verificar si todas las imágenes ya están cargadas
      let alreadyLoaded = 0;
      images.forEach((img) => {
        if (img.complete && img.naturalWidth > 0) {
          alreadyLoaded++;
        } else {
          img.addEventListener("load", handleImageLoad, { once: true });
          img.addEventListener("error", handleImageError, { once: true });
          cleanupFunctions.push(() => {
            img.removeEventListener("load", handleImageLoad);
            img.removeEventListener("error", handleImageError);
          });
        }
      });

      // Si todas ya estaban cargadas
      if (alreadyLoaded === totalImages) {
        finalTimeoutId = setTimeout(() => {
          setImagesLoaded(true);
        }, 300);
      }
    };

    // Dar tiempo para que el DOM se renderice
    timeoutId = setTimeout(() => {
      checkImagesLoaded();
    }, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (finalTimeoutId) clearTimeout(finalTimeoutId);
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Ejecutar solo una vez al montar

  // Iniciar animación solo cuando las imágenes estén cargadas
  useEffect(() => {
    if (!imagesLoaded) return;

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
  }, [carouselImages.length, animationDuration, imagesLoaded]);

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
      {/* Loader */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-opacity-90 bg-stone-100 dark:bg-neutral-900">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-stone-300 dark:border-neutral-700 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-stone-600 dark:border-t-stone-400 rounded-full animate-spin"></div>
            </div>
            <p className="text-stone-600 dark:text-stone-400 text-sm">
              Cargando imágenes...
            </p>
          </div>
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className={`flex h-full ${
          !imagesLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        {loopImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex-shrink-0 w-1/2 md:w-1/3 h-full"
          >
            <Image
              width={1000}
              height={1000}
              alt={image.path}
              src={image.path}
              draggable={false}
              className="w-full h-full object-cover select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
