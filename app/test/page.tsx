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

const detallesHeridas: any = {
  "Rechazo": {
    diagnostico: "Tu mecanismo de defensa actual es la 'huida'. Ante el conflicto, prefieres desaparecer o invalidar tus propios deseos antes de que alguien más pueda rechazarte.",
    mensaje: "Hola, obtuve 'Rechazo'. Deseo adquirir el manual para aprender a validar mi existencia y dejar de huir."
  },
  "Abandono": {
    diagnostico: "Tu sistema emocional opera bajo el miedo a la carencia. Esto te lleva a crear lazos de dependencia donde priorizas la presencia de otros sobre tu propia dignidad.",
    mensaje: "Hola, mi resultado es 'Abandono'. Quiero el manual para trabajar mi seguridad personal y aprender a estar bien conmigo mismo."
  },
  "Humillación": {
    diagnostico: "Has asumido el rol de 'salvador' para evitar ser juzgado. Cargas con pesos ajenos como una forma de sentir que tienes valor, olvidando tus límites básicos.",
    mensaje: "Hola, salió 'Humillación'. Me interesa el libro para aprender a poner límites sanos y recuperar mi libertad."
  },
  "Traición": {
    diagnostico: "Vives en un estado de hipervigilancia. El miedo a ser engañado nuevamente te obliga a controlar cada detalle de tu entorno y de tus relaciones.",
    mensaje: "Hola, mi herida es 'Traición'. Quiero el manual para aprender a soltar el control y volver a confiar."
  },
  "Injusticia": {
    diagnostico: "La rigidez es tu armadura. Te exiges perfección absoluta y bloqueas tu sensibilidad para no parecer débil, lo que te genera un agotamiento profundo.",
    mensaje: "Hola, obtuve 'Injusticia'. Deseo el libro para aprender a vivir con menos rigidez y más compasión."
  }
};

export default function TestHeridas() {
  const [respuestas, setRespuestas] = useState<any>({});
  const [resultado, setResultado] = useState<string | null>(null);

  const responder = (id: number, herida: string, valor: number) => {
    setRespuestas({ ...respuestas, [id]: { herida, valor } });
  };

  const calcular = () => {
    if (Object.keys(respuestas).length < 15) return alert("Por favor, responde las 15 preguntas para un diagnóstico preciso.");
    const puntos: any = { Rechazo: 0, Abandono: 0, Humillación: 0, Traición: 0, Injusticia: 0 };
    Object.values(respuestas).forEach((r: any) => { puntos[r.herida] += r.valor; });
    const ganador = Object.entries(puntos).sort((a: any, b: any) => b[1] - a[1])[0][0];
    setResultado(ganador);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 flex flex-col items-center font-serif text-[#2C2C2C]">
      <div className="max-w-2xl w-full">
        {!resultado ? (
          <>
            <h1 className="text-3xl mb-4 italic text-[#8B735B] text-center font-bold">El Mapa del Ayer</h1>
            
            {/* GUÍA DE PUNTUACIÓN (Valor agregado para el usuario) */}
            <div className="bg-white p-5 rounded-2xl border border-[#EAE4D9] mb-10 text-center shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-sans">Guía de escala emocional</p>
              <div className="flex justify-between items-center px-4 md:px-10">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-[#EAE4D9]">1</span>
                  <span className="text-[9px] uppercase tracking-tighter text-gray-400 font-sans">Nunca</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map(n => <div key={n} className="w-1 h-1 rounded-full bg-[#F3EEE5]"></div>)}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-[#8B735B]">5</span>
                  <span className="text-[9px] uppercase tracking-tighter text-[#8B735B] font-sans font-bold">Siempre</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mt-4 italic">Responde con honestidad según te sientas en esta etapa de tu vida.</p>
            </div>

            <div className="space-y-6">
              {preguntas.map((p) => (
                <div key={p.id} className="bg-white p-8 rounded-2xl border border-[#EAE4D9] shadow-sm transition-all hover:shadow-md">
                  <p className="text-lg mb-8 leading-relaxed font-light">{p.id}. {p.texto}</p>
                  <div className="flex justify-between gap-2 max-w-xs mx-auto">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button 
                        key={n} 
                        onClick={() => responder(p.id, p.herida, n)}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all flex items-center justify-center font-sans text-sm ${respuestas[p.id]?.valor === n ? 'bg-[#8B735B] text-white border-[#8B735B] shadow-lg scale-110' : 'text-gray-400 border-[#EAE4D9] hover:border-[#8B735B]'}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={calcular} className="w-full bg-[#2C2C2C] text-white py-6 rounded-full font-bold tracking-[0.3em] mt-10 shadow-xl hover:bg-[#4A4A4A] transition-all text-sm">VER MI DIAGNÓSTICO PROFESIONAL</button>
              <div className="h-20"></div> {/* Espacio extra al final */}
            </div>
          </>
        ) : (
          <div className="text-center bg-white p-8 md:p-12 rounded-3xl border border-[#EAE4D9] shadow-2xl animate-fade-in mt-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4 font-sans">Análisis Finalizado</h2>
            <h3 className="text-[#8B735B] text-5xl italic font-bold mb-6">{resultado}</h3>
            
            <section className="bg-[#FDFBF7] p-6 rounded-2xl border-l-4 border-[#8B735B] text-left mb-10">
              <h4 className="font-bold text-[#2C2C2C] mb-3 uppercase text-xs tracking-widest font-sans">Radiografía de tu Herida:</h4>
              <p className="text-gray-600 leading-relaxed italic">"{detallesHeridas[resultado].diagnostico}"</p>
            </section>

            <section className="text-left space-y-8 mb-10">
              <h4 className="font-bold text-[#2C2C2C] mb-6 uppercase text-xs tracking-[0.2em] text-center font-sans">
                Tu inversión en "El Mapa del Ayer" incluye:
              </h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-[#8B735B] font-bold font-sans">01.</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#2C2C2C]">Análisis Profundo:</strong> Capítulos dedicados a desarmar quirúrgicamente el origen de tu herida y los mecanismos de defensa que hoy te limitan.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <span className="text-[#8B735B] font-bold font-sans">02.</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#2C2C2C]">Cuaderno Interactivo:</strong> Un espacio vivo con dinámicas de escritura terapéutica diseñadas para que dejes de ser espectador y reescribas tu historia.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-[#8B735B] font-bold font-sans">03.</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#2C2C2C]">Botiquín de Emergencia:</strong> Técnicas de rescate (Grounding, Abrazo de Mariposa) para los días en los que la herida se abra en tu cotidianidad.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-[#8B735B] font-bold font-sans">04.</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#2C2C2C]">Plan de 21 Días:</strong> Una bitácora estructurada paso a paso para consolidar tu nueva narrativa y asegurar que tu sanación sea permanente.
                  </p>
                </div>
              </div>
            </section>

            <p className="text-gray-500 mb-8 text-sm italic border-t border-[#F3EEE5] pt-6">
              Este diagnóstico es solo el inicio. El protocolo completo para sanar la herida de {resultado} te espera en las páginas de mi manual profesional.
            </p>

            <div className="flex flex-col gap-4">
              <a 
                href={`https://wa.me/51915208903?text=${encodeURIComponent(detallesHeridas[resultado].mensaje)}`}
                className="bg-[#2C2C2C] text-white py-5 px-10 rounded-full font-bold shadow-lg hover:bg-[#4A4A4A] transition-all flex items-center justify-center gap-2 font-sans text-sm tracking-widest"
              >
                ADQUIRIR EL MANUAL COMPLETO
              </a>
              <Link href="/" className="text-gray-400 underline text-sm mt-4 font-sans hover:text-[#8B735B] transition-colors">Volver a la portada</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
