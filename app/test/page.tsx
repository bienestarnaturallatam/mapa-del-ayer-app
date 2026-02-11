"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const preguntas = [
  { id: 1, herida: "Rechazo", texto: "¿Sueles sentir que no encajas en los grupos o que tu presencia no es importante?" },
  { id: 2, herida: "Rechazo", texto: "¿Prefieres pasar desapercibido y te cuesta mucho aceptar cumplidos?" },
  { id: 3, herida: "Rechazo", texto: "¿Cuando alguien te critica, sientes un deseo profundo de 'desaparecer'?" },
  { id: 4, herida: "Abandono", texto: "¿Te da miedo la idea de que las personas que amas te dejen de lado o te olviden?" },
  { id: 5, herida: "Abandono", texto: "¿Sueles aguantar relaciones que no te hacen bien solo por no quedarte solo?" },
  { id: 6, herida: "Abandono", texto: "¿Sientes necesidad constante de buscar la aprobación de otros antes de decidir?" },
  { id: 7, herida: "Humillación", texto: "¿Te sientes responsable de la felicidad ajena y te olvidas de tus necesidades?" },
  { id: 8, herida: "Humillación", texto: "¿Sueles avergonzarte con facilidad de tus acciones o de tu cuerpo?" },
  { id: 9, herida: "Humillación", texto: "¿Tiendes a hacerte cargo de problemas ajenos para sentirte valioso?" },
  { id: 10, herida: "Traición", texto: "¿Sientes que debes tener el control total para evitar que algo salga mal?" },
  { id: 11, herida: "Traición", texto: "¿Te cuesta delegar tareas porque crees que nadie las hará como tú?" },
  { id: 12, herida: "Traición", texto: "¿Analizas mucho a los demás antes de entregar tu confianza?" },
  { id: 13, herida: "Injusticia", texto: "¿Te exiges demasiado y te cuesta mostrar vulnerabilidad ante otros?" },
  { id: 14, herida: "Injusticia", texto: "¿Sientes que la vida debe ser perfecta y te irritas si algo no es 'como debería'?" },
  { id: 15, herida: "Injusticia", texto: "¿Te cuesta disfrutar del descanso sin sentir que deberías ser productivo?" },
];

export default function TestHeridas() {
  const [respuestas, setRespuestas] = useState<any>({});
  const [resultado, setResultado] = useState<string | null>(null);

  const responder = (id: number, herida: string, valor: number) => {
    setRespuestas({ ...respuestas, [id]: { herida, valor } });
  };

  const calcular = () => {
    if (Object.keys(respuestas).length < 15) return alert("Por favor, responde las 15 preguntas.");
    
    const puntos: any = { Rechazo: 0, Abandono: 0, Humillación: 0, Traición: 0, Injusticia: 0 };
    Object.values(respuestas).forEach((r: any) => puntos[r.herida] += r.valor);
    
    const ganador = Object.entries(puntos).sort((a: any, b: any) => b[1] - a[1])[0][0];
    setResultado(ganador);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 flex flex-col items-center font-serif text-[#2C2C2C]">
      <div className="max-w-2xl w-full">
        {!resultado ? (
          <>
            <h1 className="text-3xl mb-10 italic text-[#8B735B] text-center">El Mapa del Ayer</h1>
            <div className="space-y-6">
              {preguntas.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-xl border border-[#EAE4D9]">
                  <p className="text-lg mb-6">{p.id}. {p.texto}</p>
                  <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button 
                        key={n} 
                        onClick={() => responder(p.id, p.herida, n)}
                        className={`w-10 h-10 rounded-full border ${respuestas[p.id]?.valor === n ? 'bg-[#8B735B] text-white' : 'text-gray-400'}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={calcular} className="w-full bg-[#2C2C2C] text-white py-5 rounded-full font-bold tracking-widest mt-10">OBTENER DIAGNÓSTICO</button>
            </>
        ) : (
          <div className="text-center bg-white p-10 rounded-3xl border border-[#EAE4D9] shadow-xl">
            <h2 className="text-[#8B735B] text-5xl italic mb-6">{resultado}</h2>
            <p className="text-gray-600 mb-10">Tu herida principal ha sido identificada. Es momento de empezar a sanar.</p>
            <a href="https://wa.me/51915208903" className="bg-[#25D366] text-white py-4 px-8 rounded-full font-bold">SANAR POR WHATSAPP</a>
            <Link href="/" className="block mt-6 text-gray-400 underline">Volver al inicio</Link>
          </div>
        )}
      </div>
    </div>
  );
}
