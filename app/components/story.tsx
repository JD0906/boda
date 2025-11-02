"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface StoryProps {
  isDarkMode: boolean;
  visibleSections: Set<string>;
}

export default function Story({ isDarkMode, visibleSections }: StoryProps) {
  const searchParams = useSearchParams();
  const [invitados, setInvitados] = useState<string[]>([]);

  useEffect(() => {
    try {
      // Obtener todos los valores del parámetro "Invitados" (soporta múltiples valores)
      const allInvitados = searchParams.getAll("invitados");

      let nombres: string[] = [];

      if (allInvitados.length > 0) {
        // Si hay múltiples parámetros con el mismo nombre, usar todos
        if (allInvitados.length > 1) {
          nombres = allInvitados.map((nombre) =>
            decodeURIComponent(nombre.trim())
          );
        } else {
          // Solo un parámetro, intentar parsear diferentes formatos
          const invitadosParam = allInvitados[0];

          // Intentar parsear como JSON array primero
          if (invitadosParam.startsWith("[") && invitadosParam.endsWith("]")) {
            nombres = JSON.parse(invitadosParam);
          }
          // Si viene como valores separados por coma
          else if (invitadosParam.includes(",")) {
            nombres = invitadosParam
              .split(",")
              .map((nombre) => decodeURIComponent(nombre.trim()));
          }
          // Si viene como un solo valor
          else {
            nombres = [decodeURIComponent(invitadosParam)];
          }
        }

        if (nombres.length > 0) {
          setInvitados(nombres);
        }
      }
    } catch (error) {
      console.error("Error parsing Invitados parameter:", error);
    }
  }, [searchParams]);

  return (
    <div
      id="welcome"
      data-section
      className={`p-8 max-w-2xl mx-auto ${
        visibleSections.has("welcome")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="text-center mb-8">
        <h2
          className={`text-6xl md:text-8xl font-script font-light tracking-[0.2em] mb-6 transition-colors duration-300 ${
            isDarkMode ? "text-stone-400" : "text-black"
          }`}
        >
          Bienvenidos
        </h2>
        <div
          className={`w-16 h-px mx-auto transition-all duration-500 ${
            isDarkMode ? "bg-stone-700" : "bg-stone-300"
          }`}
        ></div>
      </div>
      <p
        className={`text-md md:text-lg leading-relaxed text-justify font-serif font-light transition-colors duration-300 ${
          isDarkMode ? "text-stone-300" : "text-black"
        }`}
      >
        Después de años compartiendo sueños, aventuras y momentos inolvidables,
        hemos decidido unir nuestras vidas para siempre. Te invitamos a ser
        parte de este día tan especial donde celebraremos nuestro amor rodeados
        de las personas que más queremos.
      </p>

      <br />

      <p
        className={`text-md md:text-lg leading-relaxed text-center font-serif font-light transition-colors duration-300 ${
          isDarkMode ? "text-stone-300" : "text-black"
        }`}
      >
        <span className="text-4xl md:text-5xl font-script font-light tracking-[0.2em] mb-6 transition-colors duration-300">
          Invitados
        </span>
        <br />
      </p>

      <p
        className={`text-xl md:text-xl leading-relaxed text-center font-serif font-light transition-colors duration-300 text-black ${
          isDarkMode ? "text-stone-300" : "text-black"
        }`}
      >
        {invitados.length > 0 ? (
          invitados.map((nombre, index) => (
            <React.Fragment key={index}>
              <br />
              {nombre}
              <br />
            </React.Fragment>
          ))
        ) : (
          <React.Fragment>
            <br />
            No hay invitados
          </React.Fragment>
        )}
      </p>
    </div>
  );
}
