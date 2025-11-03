"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Wine, Utensils, Coffee, Car, Music, PartyPopper } from "lucide-react";
import DressCarousel from "./dress-carousel";
import Image from "next/image";

interface ContentCardsProps {
  isDarkMode: boolean;
  visibleSections: Set<string>;
}

export default function ContentCards({
  isDarkMode,
  visibleSections,
}: ContentCardsProps) {
  const timelineItems = [
    { time: "2:30 PM", label: "Ceremonia", Icon: PartyPopper },
    { time: "4:00 PM", label: "Cóctel", Icon: Wine },
    { time: "5:00 PM", label: "Primer Baile", Icon: Music },
    { time: "5:20 PM", label: "Café", Icon: Coffee },
    { time: "7:00 PM", label: "Cena", Icon: Utensils },
    { time: "8:00 PM", label: "Baile", Icon: Music },
    { time: "10:00 PM", label: "Despedida", Icon: Car },
  ];

  return (
    <div>
      {/* History Card */}
      <div
        id="story"
        data-section
        className={`p-8 max-w-2xl mx-auto ${
          visibleSections.has("story")
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
            Nuestra Historia
          </h2>
          <div
            className={`w-16 h-px mx-auto transition-all duration-500 ${
              isDarkMode ? "bg-stone-700" : "bg-stone-300"
            }`}
          ></div>
        </div>

        <p
          className={`text-md md:text-lg text-justify mb-8 leading-relaxed font-serif font-light transition-colors duration-300 ${
            isDarkMode ? "text-stone-400" : "text-black"
          }`}
        >
          Nuestra historia comenzó en 2017, en una iglesia, un lugar donde Dios
          empezó a tocar nuestras vidas de manera especial. Yo tenía 20 años y
          Juan 19, y desde ese instante supimos que algo hermoso estaba naciendo
          entre nosotros.
          <br /> <br />
          Desde pequeños, cada uno cultivó sus sueños: Juan, con su amor por los
          Legos, aprendió a construir con paciencia y pasión , mientras yo
          exploraba mi creatividad pintando, jugando a casarme con el velo de mi
          mamá y cuidando a todos a mi alrededor, sintiendo desde niña el
          llamado a ayudar y servir.
          <br /> <br />
          Un año después, el 7 de septiembre de 2018, nos hicimos novios en el
          Bosque de la Hoja, un momento que quedó grabado en nuestros corazones
          y marcó el inicio de nuestra aventura juntos.
          <br /> <br />
          Con el tiempo, Dios nos guió: Juan se convirtió en ingeniero, yo en
          enfermera, y juntos aprendimos a apoyarnos, soñar y construir una vida
          compartida.
          <br /> <br />
          Hoy, después de siete años de noviazgo y ocho de conocernos,
          celebramos nuestro amor, nuestra fe y todos los sueños que hemos ido
          tejiendo juntos, listos para empezar esta nueva etapa como esposos,
          rodeados de familia, amigos y de todo lo que hemos construido con
          amor.
        </p>

        {/* Dress Images Row - No Card, Larger Images */}
        <div className="flex justify-center mb-8 w-full mx-auto">
          <Image
            width={1200}
            height={800}
            src="/images/historia.jpeg"
            alt={`Dress example ${0 + 1}`}
            className="w-200 h-200 object-center transition-transform duration-300 hover:scale-105 max-w-96 mx-auto"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 800px"
            style={{
              animation: visibleSections.has("history_details")
                ? `bounceIn 0.6s ease-out ${0 * 0.1}s both`
                : "none",
            }}
          />
        </div>

        <div className="flex justify-center mb-8 w-full mx-auto"></div>
      </div>

      {/* venue Card */}
      <div
        id="venue"
        data-section
        className={`relative w-full ${
          visibleSections.has("venue")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: "100vh", height: "100vh" }}
      >
        {/* Imagen de fondo que abarca todo el width y alto */}
        <Image
          width={1200}
          height={800}
          src="/images/img10.jpg"
          alt="Foto final"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
          quality={75}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ minHeight: "100vh", height: "100vh" }}
        />
        {/* Degradado para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        {/* Contenido centrado y en blanco */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <h1 className="text-6xl md:text-8xl font-script font-light tracking-[0.1em] text-white mb-6">
            Venue
          </h1>
        </div>
      </div>

      <div
        id="location"
        data-section
        className={`p-8 max-w-2xl mx-auto ${
          visibleSections.has("location")
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
            Locación
          </h2>
          <div
            className={`w-16 h-px mx-auto transition-all duration-500 ${
              isDarkMode ? "bg-stone-700" : "bg-stone-300"
            }`}
          ></div>
        </div>

        <h3 className="text-xl md:text-2xl font-serif font-light mb-3 text-black text-center">
          Hotel y Restaurante La Casona del Cafetal
        </h3>
        <p className="text-md md:text-lg mb-6 font-serif font-light text-black text-center">
          Cachí Cartago, Costa Rica
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            className="px-6 rounded-2xl font-serif font-light tracking-wide text-base py-2"
            variant={isDarkMode ? "secondary" : "default"}
          >
            <a
              href="https://www.google.com/maps/place/Hotel+y+Restaurante+La+Casona+del+Cafetal/@9.8281756,-83.8138265,17z/data=!3m1!4b1!4m9!3m8!1s0x8fa12773e6c12dbf:0x9ba4e875406b4784!5m2!4m1!1i2!8m2!3d9.8281756!4d-83.8112516!16s%2Fg%2F1hdz5tp4p?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Ver Ubicación
            </a>
          </Button>
        </div>
      </div>

      <div
        id="location_details"
        data-section
        className={`p-8 max-w-2xl mx-auto ${
          visibleSections.has("location_details")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <DressCarousel
          isDarkMode={isDarkMode}
          visibleSections={visibleSections}
        />
      </div>

      {/* Dress Code Card */}
      <div
        id="dress"
        data-section
        className={`relative w-full ${
          visibleSections.has("dress")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: "50vh", height: "50vh" }}
      >
        {/* Imagen de fondo que abarca todo el width y alto */}
        <Image
          width={1200}
          height={800}
          src="/images/sesion2.jpg"
          alt="Foto final"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
          quality={75}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ minHeight: "50vh", height: "50vh" }}
        />
        {/* Degradado para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        {/* Contenido centrado y en blanco */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <h1 className="text-6xl md:text-8xl font-script font-light tracking-[0.1em] text-white mb-6 text-center">
            Dress Code
          </h1>
        </div>
      </div>

      <div
        id="details"
        data-section
        className={`p-8 max-w-2xl mx-auto ${
          visibleSections.has("details")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <p
          className={`text-md md:text-lg text-center mb-8 leading-relaxed font-serif transition-colors duration-300 font-bold ${
            isDarkMode ? "text-stone-400" : "text-black"
          }`}
        >
          La boda será de gala, elegante y romántica.
        </p>

        <p
          className={`text-md md:text-lg text-justify mb-8 leading-relaxed font-serif font-light transition-colors duration-300 ${
            isDarkMode ? "text-stone-400" : "text-black"
          }`}
        >
          Damas: Solo vestidos largos. No se permiten palazos ni conjuntos de
          dos piezas. Omitir el blanco y el beige, tanto en vestidos como en
          estampados. Colores sofisticados y armoniosos son bienvenidos.
          <br /> <br />
          Caballeros: Traje formal con corbata o corbatín. Evitar tonos como
          blanco en smoking.
          <br /> <br />
          Gracias por vestir con estilo y ayudarnos a que nuestro día luzca
          inolvidable.
        </p>

        {/* Dress Images Row - No Card, Larger Images */}
        <div className="flex justify-center mb-8 w-full mx-auto">
          <Image
            width={1200}
            height={800}
            src="/images/dress6.png"
            alt={`Dress example ${0 + 1}`}
            className="w-200 h-200 object-center transition-transform duration-300 hover:scale-105 max-w-96 mx-auto"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 800px"
            style={{
              animation: visibleSections.has("details")
                ? `bounceIn 0.6s ease-out ${0 * 0.1}s both`
                : "none",
            }}
          />
        </div>

        <div className="flex justify-center mb-8 w-full mx-auto"></div>
      </div>

      {/* Timeline Card */}
      <div
        id="timeline"
        data-section
        className={`relative w-full ${
          visibleSections.has("timeline")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: "50vh", height: "50vh" }}
      >
        {/* Imagen de fondo que abarca todo el width y alto */}
        <Image
          width={1200}
          height={800}
          src="/images/sesion1.jpg"
          alt="Foto final"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
          quality={75}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ minHeight: "50vh", height: "50vh" }}
        />
        {/* Degradado para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        {/* Contenido centrado y en blanco */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <h1 className="text-6xl md:text-8xl font-script font-light tracking-[0.1em] text-white mb-6 text-center">
            Itinerario
          </h1>
        </div>
      </div>

      <div
        id="details_timeline"
        data-section
        className={`p-8 max-w-2xl mx-auto ${
          visibleSections.has("details_timeline")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Línea central */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/50"></div>

          <ul className="space-y-14">
            {timelineItems.map((item, index) => {
              const IconComp = item.Icon;
              const isLeft = index % 2 === 0;
              return (
                <li
                  key={item.time}
                  className={`relative flex ${
                    isLeft ? "justify-end" : "justify-start"
                  } items-center`}
                >
                  {/* Contenido */}
                  <div>
                    <p className="text-sm font-serif text-black/70">
                      {item.time}
                    </p>
                    <p className="text-lg md:text-xl font-serif text-black mt-1">
                      {item.label}
                    </p>
                  </div>

                  {/* Punto e ícono central */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-black/20 z-10">
                      <IconComp className="w-6 h-6 text-black" />
                    </div>
                    <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Estilos responsive */}
        <style jsx>{`
          @media (max-width: 640px) {
            li > div.w-\\[45%\\] {
              width: 100%;
              padding: 0 1rem !important; /* deja un poco de margen lateral */
            }
            li > div.w-\\[45%\\] p {
              text-align: center !important;
            }
            .absolute.left-1\\/2 {
              position: relative;
              transform: none;
              left: 0;
              margin: 1rem 0;
            }
          }
        `}</style>
      </div>

      {/* GIFT_CARD */}
      <div
        id="gift"
        data-section
        className={`relative w-full ${
          visibleSections.has("gift")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: "50vh", height: "50vh" }}
      >
        {/* Imagen de fondo que abarca todo el width y alto */}
        <Image
          width={1200}
          height={800}
          src="/images/sesion3.jpg"
          alt="Foto final"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
          quality={75}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ minHeight: "50vh", height: "50vh" }}
        />
        {/* Degradado para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        {/* Contenido centrado y en blanco */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <h1 className="text-6xl md:text-8xl font-script font-light tracking-[0.1em] text-white mb-6 text-center">
            Mesa de Regalos
          </h1>
        </div>
      </div>

      <div
        id="gift_details"
        data-section
        className={`p-8 max-w-2xl mx-auto ${
          visibleSections.has("gift_details")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="mt-8 mb-8 text-center">
          <p
            className={`text-md md:text-lg text-justify font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-200" : "text-black"
            }`}
          >
            Si desean acompañarnos con un detalle, hemos preparado nuestra mesa
            de regalos en sobres de dinero en efectivo, preferiblemente.
            <br /> <br />
          </p>
          <p
            className={`text-md md:text-lg text-center mb-8 leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-200" : "text-black"
            }`}
          >
            SINPE Móvil: 70794117
            <br />
            <br />
            Banco BAC Credomatic JUAN DIEGO DURANGO RIVERA
            <br />
            Número de cuenta BAC: 950887877
            <br />
            Número de cuenta IBAN: CR07010200009508878774
            <br />
            <br />
            Banco BAC Credomatic JOSSELINE SANCHEZ PEREZ
            <br />
            Número de cuenta BAC: 944469147
            <br />
            Número de cuenta IBAN: CR54010200009444691476
            <br /> <br />
            Cada gesto de cariño hará que nuestra luna de miel sea inolvidable.
          </p>
        </div>
      </div>

      {/* RSVP Card */}
      <div
        id="rsvp"
        data-section
        className={`relative w-full ${
          visibleSections.has("rsvp")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: "50vh", height: "50vh" }}
      >
        {/* Imagen de fondo que abarca todo el width y alto */}
        <Image
          width={1200}
          height={800}
          src="/images/sesion15.jpg"
          alt="Foto final"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
          quality={75}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ minHeight: "50vh", height: "50vh" }}
        />
        {/* Degradado para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        {/* Contenido centrado y en blanco */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <h1 className="text-6xl md:text-8xl font-script font-light tracking-[0.1em] text-white mb-6 text-center">
            Asistencia
          </h1>
        </div>
      </div>

      <div
        id="rsvp_details"
        data-section
        className={`p-8 max-w-2xl mx-auto ${
          visibleSections.has("rsvp_details")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="text-center mb-8">
          <p
            className={`text-md md:text-lg text-center mb-8 leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-200" : "text-black"
            }`}
          >
            Favor confirmar su asistencia antes del 20 de diciembre.
          </p>
        </div>

        <div className="space-y-6 flex justify-center">
          <Button
            asChild
            className="px-6 rounded-2xl font-serif font-light tracking-wide text-base py-2"
            variant={isDarkMode ? "secondary" : "default"}
          >
            <a
              href="https://forms.gle/FKw8bBcZ4GD8LREeA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confirmar Asistencia
            </a>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p
            className={`text-lg font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-200" : "text-black"
            }`}
          >
            ¡Esperamos verte allí!
          </p>
        </div>
      </div>

      {/* Recomendaciones Card*/}
      <div
        id="recommendations"
        data-section
        className={`relative w-full ${
          visibleSections.has("recommendations")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: "50vh", height: "50vh" }}
      >
        {/* Imagen de fondo que abarca todo el width y alto */}
        <Image
          width={1200}
          height={800}
          src="/images/sesion11.jpg"
          alt="Foto final"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
          quality={75}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ minHeight: "50vh", height: "50vh" }}
        />
        {/* Degradado para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        {/* Contenido centrado y en blanco */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-16 px-4">
          <h1 className="text-6xl md:text-8xl font-script font-light tracking-[0.1em] text-white mb-6 text-center">
            Recomendaciones
          </h1>
        </div>
      </div>

      <div
        id="recommendationsdetails"
        data-section
        className={`p-8 max-w-2xl mx-auto space-y-8 ${
          visibleSections.has("recommendationsdetails")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Clima Section */}
        <div className="space-y-3">
          <h3
            className={`text-xl md:text-2xl font-serif font-bold text-center transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Clima
          </h3>
          <p
            className={`text-md md:text-lg text-justify leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Enero en Cachí ofrece un clima templado y agradable, con
            temperaturas que rondan los 23 °C durante la tarde y descienden
            hasta unos 14 °C por la noche. Te recomendamos llevar un suéter o
            abrigo liviano, ya que la humedad y la brisa del atardecer pueden
            sentirse más frescas al caer la noche.
          </p>
        </div>

        {/* Calzado Section */}
        <div className="space-y-3">
          <h3
            className={`text-xl md:text-2xl font-serif font-bold text-center transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Calzado
          </h3>
          <p
            className={`text-md md:text-lg text-justify leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            La ceremonia se llevará a cabo sobre césped, por lo que te sugerimos
            optar por tacones de base cuadrada o zapatos cómodos que permitan
            moverte con facilidad, si quieres estar cómodo y disfrutar de la
            noche puedes usar tus tenis para la pista de baile.
          </p>
        </div>

        {/* Parqueo Section */}
        <div className="space-y-3">
          <h3
            className={`text-xl md:text-2xl font-serif font-bold text-center transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Parqueo
          </h3>
          <p
            className={`text-md md:text-lg text-justify leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Habrá parqueo disponible durante toda la noche dentro del recinto,
            para tu comodidad y seguridad.
          </p>
        </div>

        {/* Confirmación de asistencia Section */}
        <div className="space-y-3">
          <h3
            className={`text-xl md:text-2xl font-serif font-bold text-center transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Confirmación de asistencia
          </h3>
          <p
            className={`text-md md:text-lg text-justify leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Por favor, confirma tu asistencia completando el formulario
            disponible en nuestra página web de la invitación. Tu confirmación
            es esencial para poder contar con tu presencia, ya que de lo
            contrario no podremos incluirte en la lista final de invitados.
          </p>
        </div>

        {/* Invitación personal Section */}
        <div className="space-y-3">
          <h3
            className={`text-xl md:text-2xl font-serif font-bold text-center transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Invitación personal
          </h3>
          <p
            className={`text-md md:text-lg text-justify leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            La invitación es exclusiva para las personas cuyos nombres aparecen
            en ella. No es posible realizar sustituciones ni agregar
            acompañantes adicionales.
          </p>
        </div>

        {/* Hospedaje Section */}
        <div className="space-y-3">
          <h3
            className={`text-xl md:text-2xl font-serif font-bold text-center transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Hospedaje recomendado cerca de Cachí y Orosí
          </h3>
          <p
            className={`text-md md:text-lg text-justify leading-relaxed font-serif font-light transition-colors duration-300 mb-4 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Para quienes deseen quedarse a disfrutar de la zona, te compartimos
            algunas opciones de hospedaje con diferentes estilos y presupuestos:
          </p>
          <ul
            className={`space-y-4 text-md md:text-lg leading-relaxed font-serif font-light transition-colors duration-300 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            <li className="text-justify">
              • Hotel Quelitales – elegante, rodeado de naturaleza.
            </li>
            <li className="text-justify">
              • Orosi Lodge – acogedor y con encanto en el valle de Orosí.
            </li>
            <li className="text-justify">
              • Coffee Pickers Village by Hacienda Orosi – moderno, con hermosas
              vistas y piscina termal.
            </li>
            <li className="text-justify">
              • BYB Finca Chiribita – Idyllisch | Herzlich | Persönlich –
              alojamiento tipo finca con ambiente familiar y vistas preciosas.
            </li>
            <li className="text-justify">
              • Posada Cañaveral – opción sencilla y práctica cerca del lago.
            </li>
            <li className="text-justify">
              • Grandpa's Hotel & Restaurante – tradicional, con vista al valle
              y restaurante propio.
            </li>
            <li className="text-justify">
              • Paraíso Orocay Lodge – tranquilo, con habitaciones amplias y
              terraza panorámica.
            </li>
          </ul>
          <p
            className={`text-md md:text-lg text-justify leading-relaxed font-serif font-light transition-colors duration-300 mt-4 ${
              isDarkMode ? "text-stone-400" : "text-black"
            }`}
          >
            Te sugerimos reservar con anticipación, ya que enero es temporada
            alta en la zona.
          </p>
        </div>

        {/* Firma */}
        <p
          className={`text-md md:text-lg text-center mb-8 leading-relaxed font-serif font-light transition-colors duration-300 ${
            isDarkMode ? "text-stone-400" : "text-black"
          }`}
        >
          Con mucho cariño, Juan & Joss
        </p>
      </div>
    </div>
  );
}
