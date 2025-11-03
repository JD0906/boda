import type { Metadata } from "next";
import "./globals.css";

import { Bodoni_Moda, Luxurious_Script } from "next/font/google";

const serif = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const script = Luxurious_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/video.MOV" fetchPriority="high" />
        <link rel="preload" as="audio" href="/cancion.mp3" />
        {/* Imágenes de sesión */}
        <link
          rel="preload"
          as="image"
          href="/images/sesion1.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion2.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion3.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion9.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion10.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion11.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion14.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion15.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/sesion16.jpg"
          fetchPriority="high"
        />
        {/* Imágenes de casona */}
        <link
          rel="preload"
          as="image"
          href="/images/casona1.jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/casona2.jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/casona3.jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/casona4.jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/casona5.jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/casona6.jpeg"
          fetchPriority="high"
        />
        {/* Otras imágenes */}
        <link
          rel="preload"
          as="image"
          href="/images/historia.jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/img10.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/dress6.png"
          fetchPriority="high"
        />
      </head>
      <body className={`${serif.variable} ${script.variable}`}>{children}</body>
    </html>
  );
}
