import React from 'react';
import Link from 'next/link';

export default function PortadaLibro() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Manual de Sanación</h2>
        <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] mb-6 tracking-tight">
          EL MAPA <br />
          <span className="italic text-[#8B735B]">DEL AYER</span>
        </h1>
        
        <div className="w-16 h-1 bg-[#8B735B] mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light italic">
          "No estás aquí para arreglarte, porque no estás roto. <br />
          Estás aquí para recordar quién eras antes de que el mundo te dijera quién debías ser."
        </p>

        <Link href="/test">
          <button className="bg-[#2C2C2C] text-white px-10 py-4 rounded-full text-lg tracking-widest hover:bg-[#4A4A4A] transition-all duration-300 shadow-xl">
            COMENZAR MI VIAJE
          </button>
        </Link>
        
        <p className="mt-12 text-xs text-gray-400 tracking-widest uppercase">
          Una guía hacia tus cinco heridas del alma
        </p>
      </div>
    </div>
  );
}
