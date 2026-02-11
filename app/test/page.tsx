"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const preguntas = [
  { id: 1, herida: "Rechazo", index: 0, texto: "¿Sueles sentir que no encajas en los grupos o que tu presencia no es importante para los demás?" },
  { id: 2, herida: "Rechazo", index: 1, texto: "¿Prefieres pasar desapercibido y te cuesta mucho trabajo aceptar cumplidos o elogios?" },
  { id: 3, herida: "Rechazo", index: 2, texto: "¿Cuando alguien te critica, sientes un deseo profundo de 'desaparecer' o huir de la situación?" },
  { id: 4, herida: "Abandono", index: 0, texto: "¿Te da un miedo paralizante la idea de que las personas que amas te dejen de lado o te olviden?" },
  { id: 5, herida: "Abandono", index: 1, texto: "¿Sueles aguantar situaciones o relaciones que no te hacen bien solo por no quedarte solo?" },
  { id: 6, herida: "Abandono", index: 2, texto: "¿Sientes una necesidad constante de buscar la opinión o aprobación de otros antes de decidir?" },
  { id: 7, herida: "Humillación", index: 0, texto: "¿Te sientes responsable de la felicidad de los demás y te olvidas de tus propias necesidades?" },
  { id: 8, herida: "Humillación", index: 1, texto: "¿Sueles avergonzarte con facilidad de tus acciones, de tu cuerpo o de tus deseos?" },
  { id: 9, herida: "Humillación", index: 2, texto: "¿Tiendes a hacerte cargo de problemas ajenos para sentirte valioso o útil?" },
  { id: 10, herida: "Traición", index: 0, texto: "¿Sientes que debes tener el control total de las situaciones para evitar que algo salga mal?" },
  { id: 11, herida: "Traición", index: 1, texto: "¿Te cuesta mucho delegar tareas porque crees que nadie las hará con la misma eficacia que tú?" },
  { id: 12, herida: "Traición", index: 2, texto: "¿Analizas minuciosamente el comportamiento de los demás antes de entregar tu confianza?" },
  { id: 13, herida: "Injusticia", index: 0, texto: "¿Te exiges demasiado a ti mismo y te cuesta mucho mostrar vulnerabilidad frente a otros?" },
  { id: 14, herida: "Injusticia", index: 1, texto: "¿Sientes que la vida debe ser perfecta y te irritas cuando las cosas no son 'como deberían ser'?" },
  { id: 15, herida: "Injusticia", index: 2, texto: "¿Te cuesta disfrutar del descanso sin sentir que deberías estar haciendo algo productivo?" },
];

const infoHeridas: { [key: string]: { consejo: string, mensaje: string } } = {
  "Rechazo": { consejo: "Tu camino de sanación empieza por validar tu propia existencia. No necesitas permiso para ocupar tu lugar.", mensaje: "Hola, mi herida es el Rechazo. Me gustaría profundizar en cómo sanar mi autovaloración." },
  "Abandono": { consejo: "Aprende a ser tu propio refugio seguro. Cuando tú estás para ti, el miedo a que otros se vayan pierde poder.", mensaje: "Hola, mi resultado fue Abandono. Quisiera saber cómo construir mi propia seguridad emocional." },
  "Humillación": { consejo: "Es momento de soltar cargas ajenas. Tu valor no depende de cuánto te sacrifiques, sino de cuánto te respetes.", mensaje: "Hola, obtuve Humillación. Quiero aprender a priorizarme y poner límites." },
  "Traición": { consejo: "Soltar el control es valentía. Permítete confiar en el flujo de la vida y en los demás.", mensaje: "Hola, mi herida es la Traición. Me cuesta soltar el control y quiero trabajar en mi confianza." },
  "Injusticia": { consejo: "Date permiso de ser imperfecto. La rigidez bloquea tu esencia; la autocompasión es tu mejor aliada.", mensaje: "Hola, mi resultado es Injusticia. Me exijo demasiado y quiero aprender a vivir con más paz." }
};

export default function TestHeridas() {
  const [respuestas, setRespuestas] = useState<{ [key: string]: number[] }>({
    "Rechazo": [0,0,0], "Abandono": [0,0,0], "Humillación": [0,0,0], "Traición": [0,0,0], "Injusticia": [0,0,0]
  });
  const [resultado, setResultado] = useState<string | null>(null);

  const responder = (herida: string, idx: number, valor: number) => {
    const nuevosValores = [...respuestas[herida]];
    nuevosValores[idx] = valor;
    setRespuestas({ ...respuestas, [herida]: nuevosValores });
  };

  const calcularResultado = () => {
    const todasRespondidas = Object.values(respuestas).every(arr => !arr.includes(0));
    if (!todasRespondidas) return alert("Por favor, responde todas las preguntas para un diagnóstico preciso.");
    const promedios = Object.entries(respuestas).map(([herida, valores]) => ({ herida, total: valores.reduce((a, b) => a + b, 0) }));
    setResultado(promedios.sort((a, b) => b.total - a.total)[0].herida);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 md:p-12 flex flex-col items-center font-serif text-[#2C2C2C]">
      <div className="max-w-2xl w-full">
        {!resultado ? (
          <>
            <h1 className="text-4xl mb-12 italic text-[#8B735B] text-center">El Mapa del Ayer</h1>
            <div className="space-y-8">
              {preguntas.map((p, i) => (
                <div key={p.id} className="bg-white p-8 rounded-2xl border border-[#EAE4D9] shadow-sm">
                  <p className="text-xl mb-8 leading-relaxed font-light">{i + 1}. {p.texto}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-gray-300">Nunca</span>
                    <div className="flex gap-2 md:gap-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button key={num} onClick={() => responder(p.herida, p.index, num)} className={`w-10 h-10 rounded-full border flex items-center justify-center font-sans ${respuestas[p.herida][p.index] === num ? 'bg-[#8B735B] text-white border-[#8B735B]' : 'border-[#EAE4D9] text-gray-400'}`}>
                          {num}
                        </button>
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-300">Siempre</span>
                  </div>
                </div>
              ))}
              <button onClick={calcularResultado} className="w-full bg-[#2C2C2C] text-white py-6 rounded-full tracking-[0.3em] font-bold mt-12 mb-20 shadow-xl">OBTENER DIAGNÓSTICO</button>
            </>
          ) : (
            <div className="text-center bg-white p-12 rounded-[2rem] shadow-2xl border border-[#EAE4D9]">
              <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-6">Tu herida raíz es</h2>
              <h3 className="text-6xl mb-8 text-[#8B735B] italic font-bold">{resultado}</h3>
              <p className="text-2xl text-gray-700 mb-12 italic font-light">"{infoHeridas[resultado].consejo}"</p>
              <a href={`https://wa.me/51915208903?text=${encodeURIComponent(infoHeridas[resultado].mensaje)}`} target="_blank" className="bg-[#25D366] text-white py-5 px-10 rounded-full font-bold shadow-lg flex items-center justify-center gap-3 text-lg">
                INICIAR MI SANACIÓN (WHATSAPP)
              </a>
              <Link href="/" className="block mt-8 text-gray-400 underline decoration-dotted">Volver al inicio</Link>
            </div>
          )}
      </div>
    </div>
  );
}
