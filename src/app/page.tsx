"use client";

import Image from "next/image";
import StarsOverlay from "./StarsOverlay";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import React, { useRef, useState, useEffect } from "react";

export default function Home() {
  // Drag-to-scroll para sección sobre mí
  const aboutMeScrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Arrow visibility state
  const [showArrow, setShowArrow] = useState(true);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (!aboutMeScrollRef.current) return;
    aboutMeScrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - aboutMeScrollRef.current.offsetLeft;
    scrollLeft.current = aboutMeScrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
    if (!aboutMeScrollRef.current) return;
    aboutMeScrollRef.current.classList.remove("cursor-grabbing");
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    if (!aboutMeScrollRef.current) return;
    aboutMeScrollRef.current.classList.remove("cursor-grabbing");
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !aboutMeScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - aboutMeScrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    aboutMeScrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Handle scroll events for arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Hide arrow when user is near the bottom (within 100px)
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowArrow(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-black relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 border-b border-white/30 backdrop-blur-md py-5 px-4 md:px-8 flex items-center justify-between">
        {/* Hamburger menu button for mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-2 items-center" style={{ width: '120px' }}></div>

        <ul className="hidden md:flex gap-4 text-white text-lg font-[Cinzel] items-center">
          <li className="flex items-center"><a href="#inicio" className="navbar-link transition-colors"><span className="navbar-link-inner" data-text="Inicio"><span>Inicio</span></span></a></li>
          <li aria-hidden="true" className="flex items-center justify-center self-center"><Image src="/separator.svg" alt="Separador" width={18} height={24} className="w-auto h-5 align-middle" /></li>
          <li className="flex items-center"><a href="#sobremi" className="navbar-link transition-colors"><span className="navbar-link-inner" data-text="Sobre mí"><span>Sobre mí</span></span></a></li>
          <li aria-hidden="true" className="flex items-center justify-center self-center"><Image src="/separator.svg" alt="Separador" width={18} height={24} className="w-auto h-5 align-middle" /></li>
          <li className="flex items-center"><a href="#tecnologias" className="navbar-link transition-colors"><span className="navbar-link-inner" data-text="Tecnologías"><span>Tecnologías</span></span></a></li>
          <li aria-hidden="true" className="flex items-center justify-center self-center"><Image src="/separator.svg" alt="Separador" width={18} height={24} className="w-auto h-5 align-middle" /></li>
          <li className="flex items-center"><a href="#proyectos" className="navbar-link transition-colors"><span className="navbar-link-inner" data-text="Proyectos"><span>Proyectos</span></span></a></li>
          <li aria-hidden="true" className="flex items-center justify-center self-center"><Image src="/separator.svg" alt="Separador" width={18} height={24} className="w-auto h-5 align-middle" /></li>
          <li className="flex items-center"><a href="#opiniones" className="navbar-link transition-colors"><span className="navbar-link-inner" data-text="Opiniones"><span>Opiniones</span></span></a></li>
        </ul>

        <div className="hidden md:flex gap-2 items-center">
          <button className="cursor-not-allowed text-white text-lg font-[Cinzel] px-3 py-1 border border-white/30 rounded hover:bg-white/10 transition-colors min-w-[44px] text-center">EN</button>
          <button className="cursor-pointer text-white text-lg font-[Cinzel] px-3 py-1 border border-white/30 rounded hover:bg-white/10 transition-colors min-w-[44px] text-center">ES</button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="absolute top-0 right-0 h-full w-64 bg-black/95 border-l border-white/30 backdrop-blur-md p-6 flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile navigation links */}
            <nav className="flex flex-col gap-6 mt-16">
              <a
                href="#inicio"
                className="text-white text-xl font-[Cinzel] hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#sobremi"
                className="text-white text-xl font-[Cinzel] hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre mí
              </a>
              <a
                href="#tecnologias"
                className="text-white text-xl font-[Cinzel] hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tecnologias
              </a>
              <a
                href="#proyectos"
                className="text-white text-xl font-[Cinzel] hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="#opiniones"
                className="text-white text-xl font-[Cinzel] hover:text-white/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Opiniones
              </a>
            </nav>

            {/* Language buttons */}
            <div className="flex gap-2 mt-auto">
              <button className="text-white text-lg font-[Cinzel] px-3 py-1 border border-white/30 rounded hover:bg-white/10 transition-colors min-w-[44px] text-center">EN</button>
              <button className="text-white text-lg font-[Cinzel] px-3 py-1 border border-white/30 rounded hover:bg-white/10 transition-colors min-w-[44px] text-center">ES</button>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center w-full min-h-screen py-24">
        <div className="pointer-events-none select-none absolute inset-0 z-30" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.95) 100%)' }} />
        <StarsOverlay />
        <div className="hidden md:block absolute right-[-180px] bottom-0 z-5 h-full max-h-[1200px] w-auto pointer-events-none select-none">
          <Image src="/greek-meader.svg" alt="Decoración griega" height={1200} width={1200} style={{ objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(119%)' }} className="h-full max-h-[1200px] w-auto opacity-8 animate-spin-slower" />
        </div>
        <div className="z-10 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto">
          <h1 className="text-6xl sm:text-7xl font-bold text-foreground mb-4">
            Ariel Vincennao
          </h1>
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Desarrollador de Software
          </h3>
          <div className="mt-8 bg-black border border-white rounded-xl px-8 py-6 flex flex-col items-center w-full max-w-md shadow-lg">
            <div className="flex gap-10 justify-center items-center">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ariel-vincennao/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a>
              {/* GitHub */}
              <a href="https://github.com/arielvincennao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Image src="/github.svg" alt="GitHub" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/arielvincennao7" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/instagram.svg" alt="Instagram" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a>
              {/* WhatsApp
              <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a>
              */}
              {/* Telegram }
              {/*<a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Image src="/telegram.svg" alt="Telegram" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a> */}
              {/* Gmail */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vincennaoa@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                <Image src="/gmail.svg" alt="Gmail" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <blockquote className="text-xl sm:text-2xl text-foreground/80 max-w-md mx-auto mt-10 font-semibold italic">
            &ldquo;No me daré por vencido, ni aún vencido&rdquo;
          </blockquote>
        </div>
        <div className="hidden md:block absolute right-0 bottom-0 z-0 h-full max-h-[1200px] w-auto pointer-events-none select-none">
          <Image src="/viking3.png" alt="Imagen de ejemplo" height={1200} width={1200} style={{ objectFit: 'contain' }} className="h-full max-h-[1200px] w-auto" />
        </div>
      </section>
      <section
        id="sobremi"
        ref={aboutMeScrollRef}
        className="relative w-full min-h-screen py-24 px-0 bg-black z-10 border-t border-white/10 overflow-x-auto overflow-y-hidden select-none cursor-grab scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex flex-row w-[220vw] h-full snap-x snap-mandatory scroll-smooth">
          {/* 1. El Inicio */}
          <div className="flex flex-col md:flex-row items-center justify-center w-screen min-h-[80vh] px-2 snap-center transition-transform duration-500">
            {/* Fénix a la izquierda */}
            <div className="flex items-center justify-start mb-1 md:mb-0">
              <div className="h-[320px] w-[320px] xl:h-[460px] xl:w-[460px] pointer-events-none select-none">
                <Image src="/fenix.png" alt="Fénix" width={460} height={460} style={{ objectFit: 'contain' }} className="w-full h-full" />
              </div>
            </div>
            {/* Texto a la derecha */}
            <div className="flex flex-col items-center text-center justify-center ml-0">
              <Image src="/inicio.svg" alt="Inicio" width={64} height={64} className="mx-auto mb-4 opacity-20" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(119%)' }} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 font-[Cinzel]">– 1. El Origen</h2>
              <div className="max-w-2xl text-white/90 text-lg font-[Tinos]">
                <p>
                  Desde joven, mi mente funcionaba en patrones: observaba, descomponía, analizaba. Creaba mis propios algoritmos para entender el mundo. Cada problema era un sistema por desarmar, cada decisión una lógica interna por estudiar. Mientras otros simplemente aceptaban las cosas como eran, yo necesitaba saber por qué, cómo, para qué.

                  Ese deseo constante de entenderlo todo fue esculpiendo mi carácter. Sabía, intuitivamente, que cada falla escondía una lección valiosa.
                </p>
                <blockquote className="mt-6 text-xl font-bold text-white/95 italic">
                  &ldquo;La chispa natural.&rdquo;
                </blockquote>
                <div className="text-white/60 text-xl font-[Tinos] italic animate-pulse mt-5">
                  Desliza para continuar leyendo →
                </div>
              </div>
            </div>

          </div>
          {/* 2. La Batalla */}
          <div className="flex flex-col items-center justify-center w-screen min-h-[80vh] px-2 snap-center transition-transform duration-500">
            <Image src="/batalla.svg" alt="Batalla" width={64} height={64} className="mx-auto mb-4 opacity-20" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(119%)' }} />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 font-[Cinzel]">– 2. La batalla eterna</h2>
            <div className="max-w-2xl text-white/90 text-lg font-[Tinos] text-center">
              <p>
                Todos mis atributos —mi lógica, mi curiosidad, mi capacidad de análisis— fueron puestos a prueba en el campo menos predecible de todos: el cuerpo.

                En plena adolescencia, cuando el mundo parecía abrirse, se cerró de golpe. Me diagnosticaron <a href="https://www.argentina.gob.ar/donar-medula" target="_blank" rel="noopener noreferrer" className="underline decoration-2 decoration-red-700 hover:decoration-red-400 transition-all inline-block">aplasia medular</a>. Fue una batalla de sudor y sangre pero logre sobrevivir no a uno, sino a dos trasplantes de médula ósea.
                <br></br>
                La lógica se transformó en mi guía definitiva. Mi forma de pensar —fría, precisa, estratégica, tajante— se convirtió en armadura frente al caos. Y aquel fuego interno que me acompañaba desde la infancia ardió más fuerte que nunca, empujándome a seguir cuando todo parecía detenerse.
              </p>
              <blockquote className="mt-6 text-xl font-bold text-white/95 italic">
                &ldquo;Nadie elige sus batallas, pero sí cómo pelearlas.&rdquo;
              </blockquote>
            </div>
            <div className="w-full max-w-4xl h-px bg-white/20 mt-12"></div>
          </div>
          {/* 3. El Resurgir */}
          <div className="flex flex-col md:flex-row items-center justify-center w-screen min-h-[80vh] px-2 snap-center transition-transform duration-500">
            {/* Texto a la izquierda */}
            <div className="flex flex-col items-center text-center justify-center">
              <Image src="/res.svg" alt="Resurgir" width={64} height={64} className="mx-auto mb-4 md:mx-0 opacity-20" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(119%)' }} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 font-[Cinzel]">– 3. Renacer</h2>
              <div className="max-w-2xl text-white/90 text-lg font-[Tinos]">
                <p>
                  Cuando la tormenta se disipó, no volví a ser el mismo. La batalla terminó, sí… pero dejó cicatrices que ya no duelen: enseñan.

                  Sobrevivir fue solo el primer paso. Lo verdaderamente desafiante fue reconstruir y obligar a pulirme con todo lo aprendido. Pensar con más claridad, transformar la incertidumbre en perspectiva y aceptar que la vida —como el código— no siempre compila como debe.

                  Renací con otra visión. Una más profunda, más consciente. Aprendí a valorar el tiempo como recurso finito, a enfrentar con orgullo mis batallas, a fallar sin vergüenza y a crecer sin pedir permiso. Entendí que cada línea escrita, cada proyecto, cada decisión, lleva impresa una parte de mi historia.

                  Hoy, no programo solo con lógica. Programo con propósito. Porque después de todo, mi mayor proyecto… fui yo mismo.
                </p>
                <blockquote className="mt-6 text-xl font-bold text-white/95 italic">
                  &ldquo;Del caos no salí igual. Salí mejor. Renací.&rdquo;
                </blockquote>
              </div>
            </div>
            {/* Fénix a la derecha */}
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <div className="h-[320px] w-[320px] xl:h-[460px] xl:w-[460px] pointer-events-none select-none">
                <Image src="/fenix.png" alt="Fénix" width={460} height={460} style={{ objectFit: 'contain', transform: 'scaleX(-1)' }} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección Equipamiento del Guerrero */}
      <section id="equipamiento" className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 px-4 bg-black z-10 border-t border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-[Cinzel]">– Conocimientos adquiridos -</h2>
        <div className="max-w-2xl text-center text-lg font-[Tinos] mb-8">
          <p>
            A lo largo de mi travesía, he forjado un arsenal de herramientas y tecnologías que potencian mi labor como desarrollador.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-start w-full max-w-6xl">
          {/* Java */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">Java</span>
            <span className="text-white/80 text-sm mt-2 text-center">POO y aplicaciones robustas</span>
          </div>
          {/* JavaScript */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">JavaScript</span>
            <span className="text-white/80 text-sm mt-2 text-center">Lógica y dinamismo web</span>
          </div>
          {/* TypeScript */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">TypeScript</span>
            <span className="text-white/80 text-sm mt-2 text-center">Tipado y robustez</span>
          </div>
          {/* HTML */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">HTML</span>
            <span className="text-white/80 text-sm mt-2 text-center">Estructura web semántica</span>
          </div>
          {/* CSS */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">CSS</span>
            <span className="text-white/80 text-sm mt-2 text-center">Estilos y animaciones</span>
          </div>
          {/* PHP */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">PHP</span>
            <span className="text-white/80 text-sm mt-2 text-center">Desarrollo web backend</span>
          </div>
          {/* Frameworks */}
          {/* Spring Boot */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">Spring Boot</span>
            <span className="text-white/80 text-sm mt-2 text-center">Framework Java para APIs</span>
          </div>
          {/* React */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">React</span>
            <span className="text-white/80 text-sm mt-2 text-center">Interfaces interactivas</span>
          </div>
          {/* Next.js */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">Next.js</span>
            <span className="text-white/80 text-sm mt-2 text-center">SSR y aplicaciones modernas</span>
          </div>
          {/* Node.js */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">Node.js</span>
            <span className="text-white/80 text-sm mt-2 text-center">Backend eficiente</span>
          </div>
          {/* Bases de datos */}
          {/* MySQL */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">MySQL</span>
            <span className="text-white/80 text-sm mt-2 text-center">Bases de datos relacionales</span>
          </div>
          {/* PostgreSQL */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">PostgreSQL</span>
            <span className="text-white/80 text-sm mt-2 text-center">DB avanzada y consultas SQL</span>
          </div>
          {/* Herramientas */}
          {/* Git */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">Git</span>
            <span className="text-white/80 text-sm mt-2 text-center">Control de versiones</span>
          </div>
          {/* GitHub */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">GitHub</span>
            <span className="text-white/80 text-sm mt-2 text-center">Repositorios y colaboración</span>
          </div>
          {/* APIs */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">APIs</span>
            <span className="text-white/80 text-sm mt-2 text-center">Integración y comunicación</span>
          </div>
          {/* REST */}
          <div className="bg-gradient-to-br from-white/10 to-black/80 border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
            <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">REST</span>
            <span className="text-white/80 text-sm mt-2 text-center">Servicios y endpoints</span>
          </div>
        </div>
      </section>
      {/* Sección Proyectos */}
      <section id="conquistas" className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 px-4 bg-black z-10 border-t border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-[Cinzel]">– Mis conquistas -</h2>
        <div className="max-w-4xl w-full px-4">
          <div className="grid gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* Sección Testimonios */}
      <section id="testimonios" className="relative flex flex-col items-center w-full min-h-screen py-24 px-4 bg-black z-10 border-t border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 font-[Cinzel] text-center">– Palabras de quienes han luchado a mi lado –</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
      {/* Sección Llamado a nuevas campañas */}
      <section id="llamado" className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 px-4 bg-black z-10 border-t border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-[Cinzel]">– Llamado a nuevas campañas –</h2>
        <div className="max-w-2xl text-center text-lg font-[Tinos]">
          <p>
            Si quieres unirte a mi próxima aventura, colaborar o tienes una propuesta desafiante, ¡no dudes en contactarme!
          </p>

        </div>
        <div className="mt-8 bg-black border border-white rounded-xl px-8 py-6 flex flex-col items-center w-full max-w-md shadow-lg">
          <div className="flex gap-10 justify-center items-center">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ariel-vincennao/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className="hover:scale-110 transition-transform" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/arielvincennao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Image src="/github.svg" alt="GitHub" width={32} height={32} className="hover:scale-110 transition-transform" />
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/arielvincennao7" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.svg" alt="Instagram" width={32} height={32} className="hover:scale-110 transition-transform" />
            </a>
            {/* WhatsApp
              <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a>
              */}
            {/* Telegram }
              {/*<a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Image src="/telegram.svg" alt="Telegram" width={32} height={32} className="hover:scale-110 transition-transform" />
              </a> */}
            {/* Gmail */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vincennaoa@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
              <Image src="/gmail.svg" alt="Gmail" width={32} height={32} className="hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
      {/* Flecha animada */}
      {showArrow && (
        <div className="fixed left-1/2 bottom-20 z-20 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none select-none transition-opacity duration-300">
          <svg width="100" height="100" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce-slow">
            <path d="M36 60l-15-15M36 60l15-15" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}
