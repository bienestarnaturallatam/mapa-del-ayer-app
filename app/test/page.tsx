'use client';
import { useState } from 'react';

export default function TestHeridas() {
  const [resultado, setResultado] = useState<string | null>(null);

  const opciones = [
    { id: 'A', herida: 'Rechazo', texto: 'Siento que no encajo en ningún lugar y prefiero retirarme antes de que alguien me ignore.' },
    { id: 'B', herida: 'Abandono', texto: 'Me aterra la soledad y a veces aguanto cosas que no debería con tal de que no se vayan de mi lado.' },
    { id: 'C', herida: 'Humillación', texto: 'Siento que cargo con los problemas de todo el mundo y me da mucha culpa decir que no.' },
    { id: 'D', herida: 'Traición', texto: 'No confío fácilmente; si no controlo yo las cosas, siento que algo malo va a pasar.' },
    { id: 'E', herida: 'Injusticia', texto: 'Soy mi juez más duro; si no soy perfecto en lo que hago, siento que no valgo nada.' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 flex flex-col items-center">
      <h2 className="text-2xl font-serif text-[#2C3E50] mb-6 mt-10 italic text-center">¿Por dónde empezar tu viaje?</h2>
      <p className="text-gray-500 mb-8 text-center italic">Selecciona la frase que mejor describa tu lucha actual:</p>

      <div className="w-full max-w-md space-y-4">
        {opciones.map((op) => (
          <button
            key={op.id}
            onClick={() => setResultado(op.herida)}
            className="w-full text-left p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#2C3E50] transition shadow-sm active:scale-95 group"
          >
            <div className="flex items-start">
              <span className="font-bold mr-3 text-[#2C3E50] group-hover:scale-110 transition-transform">{op.id}.</span> 
              <span className="text-gray-700 leading-snug">{op.texto}</span>
            </div>
          </button>
        ))}
      </div>

      {resultado && (
        <div className="mt-10 p-8 bg-white rounded-3xl shadow-2xl border-t-4 border-[#2C3E50] text-center max-w-md animate-bounce-short">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Tu punto de partida es:</p>
          <h3 className="text-3xl font-bold text-[#2C3E50] mb-4">La Herida de {resultado}</h3>
          <p className="text-gray-600 mb-6 italic">"Has dado el primer paso hacia tu sanación."</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-[#2C3E50] font-semibold text-sm underline underline-offset-4"
          >
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
}
