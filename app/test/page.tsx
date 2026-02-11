"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const preguntas = [
  { id: 1, herida: "Rechazo", texto: "¿Sueles sentir que no encajas en los grupos o que tu presencia no es importante?" },
  { id: 2, herida: "Abandono", texto: "¿Te da mucho miedo la soledad o que las personas que amas te dejen de lado?" },
  { id: 3, herida: "Humillación", texto: "¿Tiendes a olvidarte de tus necesidades por cuidar las de los demás para sentirte valioso?" },
  { id: 4, herida: "Traición", texto: "¿Sientes que debes tener el control de las situaciones para que nada salga mal?" },
  { id: 5, herida: "Injusticia", texto: "¿Te exiges demasiado y te cuesta mostrar tu vulnerabilidad o tus sentimientos?" },
];

export default function TestHeridas() {
  const [respuestas, setRespuestas] = useState<{ [key: string]: number }>({});
  const [resultado, setResultado] = useState<string | null>(null);

  const responder = (herida: string, valor: number) => {
    setRespuestas({ ...respuestas, [herida]: valor });
  };

  const calcularResultado = () => {
    const scores = Object.entries(respuestas);
    if (scores.length < 5) return alert("Por favor, responde todas las preguntas.");
    
    const ganador = scores.sort((a, b) => b[1] - a[1])[0][0];
    setResultado(ganador);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-8 flex flex-col items-center">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-serif text-[#2C2C2C] mb-8 text-center">Tu Mapa de Heridas</h1>
        
        {!resultado ? (
          <div className="space-y-8">
            {preguntas.map((p) => (
              <div key={p.id} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 mb-4">{p.texto}</p>
                <div className="flex gap-4 justify-center">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => responder(p.herida, num)}
                      className={`w-10 h-10 rounded-full border ${respuestas[p.herida] === num ? 'bg-[#8B735B] text-white' : 'border-gray-300 text-gray-500'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
                  <span>Nunca</span>
                  <span>Siempre</span>
                </div>
              </div>
            ))}
            <button 
              onClick={calcularResultado}
              className="w-full bg-[#2C2C2C] text-white py-4 rounded-full tracking-widest mt-6"
            >
              VER MI RESULTADO
            </button>
          </div>
        ) : (
          <div className="text-center bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-xl text-gray-500 uppercase tracking-widest mb-2">Tu herida principal es</h2>
            <h3 className="text-4xl font-serif text-[#8B735B] mb-6">{resultado}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Esta herida influye en cómo ves el mundo. Reconocerla es el primer paso para la sanación en "El Mapa del Ayer".
            </p>
            <Link href="/">
              <button className="text-[#8B735B] underline tracking-widest text-sm">VOLVER AL INICIO</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
