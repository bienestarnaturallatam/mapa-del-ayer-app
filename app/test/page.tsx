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
    promesa: "En 'El Mapa del Ayer', profundizaremos en el origen de este vacío para que logres ocupar tu lugar en el mundo con autoridad y sin pedir permiso.",
    mensaje: "Hola, obtuve 'Rechazo'. Deseo adquirir el libro para aprender a validar mi existencia."
  },
  "Abandono": {
    diagnostico: "Tu sistema emocional opera bajo el miedo a la carencia. Esto te lleva a crear lazos de dependencia donde priorizas la presencia de otros sobre tu propia dignidad.",
    promesa: "El manual te guiará a través de la 'Auto-Asistencia', dándote las herramientas para convertirte en tu propio refugio y sanar la necesidad constante de aprobación.",
    mensaje: "Hola, mi resultado es 'Abandono'. Quiero el manual para trabajar mi seguridad personal."
  },
  "Humillación": {
    diagnostico: "Has asumido el rol de 'salvador' para evitar ser juzgado. Cargas con pesos ajenos como una forma de sentir que tienes valor, olvidando tus límites básicos.",
    promesa: "A través de las páginas de mi obra, aprenderás a soltar las culpas heredadas y a recuperar el derecho a tu libertad y placer personal sin vergüenza.",
    mensaje: "Hola, salió 'Humillación'. Me interesa el libro para aprender a poner límites sanos."
  },
  "Traición": {
    diagnostico: "Vives en un estado de hipervigilancia. El miedo a ser engañado nuevamente te obliga a controlar cada detalle de tu entorno y de tus relaciones.",
    promesa: "El libro ofrece un protocolo de 'Entrega Consciente' para que logres desarmar tu coraza, soltar el control y volver a confiar en la vida y en los demás.",
    mensaje: "Hola, mi herida es 'Traición'. Quiero el manual para aprender a soltar el control."
  },
  "Injusticia": {
    diagnostico: "La rigidez es tu armadura. Te exiges perfección absoluta y bloqueas tu sensibilidad para no parecer débil, lo que te genera un agotamiento profundo.",
    promesa: "En este manual, trabajaremos la 'Reconexión Sensible', permitiéndote ser imperfecto y humano para vivir con una paz que la exigencia nunca te dará.",
    mensaje: "Hola, obtuve 'Injusticia'. Deseo el libro para aprender a vivir con menos rigidez."
  }
};

export default function TestHeridas() {
  const [respuestas, setRespuestas] = useState<any>({});
  const [resultado, setResultado] = useState<string | null>(null);

  const responder = (id: number, herida: string, valor: number) => {
    setRespuestas({ ...respuestas, [id]: { herida, valor } });
  };

  const calcular = () => {
    if (Object.keys(respuestas).length < 15) return alert("Por favor, responde las 15 preguntas.");
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
            <h1 className="text-3xl mb-10 italic text-[#8B735B] text-center font-bold">El Mapa del Ayer</h1>
            <div className="space-y-6">
              {preguntas.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-xl border border-[#EAE4D9] shadow-sm">
                  <p className="text-lg mb-6">{p.id}. {p.texto}</p>
                  <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button 
                        key={n} 
                        onClick={() => responder(p.id, p.herida, n)}
                        className={`w-10 h-10 rounded-full border transition-all ${respuestas[p.id]?.valor === n ? 'bg-[#8B735B] text-white border-[#8B735B]' : 'text-gray-400 border-[#EAE4D9]'}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={calcular} className="w-full bg-[#2C2C2C] text-white py-5 rounded-full font-bold tracking-[0.2em] mt-10 shadow-lg">VER MI DIAGNÓSTICO PROFESIONAL</button>
            </div>
          </>
        ) : (
          <div className="text-center bg-white p-8 md:p-12 rounded-3xl border border-[#EAE4D9] shadow-2xl animate-fade-in mt-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">Resultado del Análisis</h2>
            <h3 className="text-[#8B735B] text-5xl italic font-bold mb-6">{resultado}</h3>
            
            <div className="text-left space-y-8 mb-10">
              <section className="bg-[#FDFBF7] p-6 rounded-2xl border-l-4 border-[#8B735B]">
                <h4 className="font-bold text-[#2C2C2C] mb-3 uppercase text-xs tracking-widest">Análisis del Perfil:</h4>
                <p className="text-gray-600 leading-relaxed italic">"{detallesHeridas[resultado].diagnostico}"</p>
              </section>

              <section>
                <h4 className="font-bold text-[#2C2C2C] mb-4 uppercase text-xs tracking-widest text-center">Lo que resolvemos en "El Mapa del Ayer":</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 border border-[#F3EEE5] rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="text-[#8B735B] font-bold">●</span> {detallesHeridas[resultado].promesa}
                    </p>
                  </div>
                  <div className="p-4 border border-[#F3EEE5] rounded-lg bg-[#FDFBF7]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="text-[#8B735B] font-bold">●</span> <span className="font-bold">Protocolo de Sanación:</span> El libro contiene ejercicios prácticos diseñados para reconfigurar la memoria emocional de tu infancia.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <p className="text-gray-500 mb-8 text-sm italic border-t border-[#F3EEE5] pt-6">
              Este diagnóstico es el primer paso de tu viaje. La guía completa para sanar la herida de {resultado} se encuentra detallada en mi manual.
            </p>

            <div className="flex flex-col gap-4">
              <a 
                href={`https://wa.me/519XXXXXXXX?text=${encodeURIComponent(detallesHeridas[resultado].mensaje)}`}
                className="bg-[#2C2C2C] text-white py-5 px-10 rounded-full font-bold shadow-lg hover:bg-[#4A4A4A] transition-all flex items-center justify-center gap-2"
              >
                ADQUIRIR EL MANUAL COMPLETO
              </a>
              <Link href="/" className="text-gray-400 underline text-sm mt-4">Volver a la portada</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
