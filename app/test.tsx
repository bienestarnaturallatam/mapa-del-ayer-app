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
            <h2 className="text-2xl font-serif text-[#2C3E50] mb-6 mt-10">¿Por dónde empezar tu viaje?</h2>
            <p className="text-gray-500 mb-8 text-center italic">Selecciona la frase que mejor describa tu lucha actual:</p>

            <div className="w-full max-w-md space-y-4">
                {opciones.map((op) => (
                    <button
                        key={op.id}
                        onClick={() => setResultado(op.herida)}
                        className="w-full text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-[#2C3E50] transition shadow-sm active:scale-95"
                    >
                        <span className="font-bold mr-2 text-[#2C3E50]">{op.id}.</span>
                        <span className="text-gray-700">{op.texto}</span>
                    </button>
                ))}
            </div>

            {resultado && (
                <div className="mt-10 p-6 bg-white rounded-2xl shadow-xl border-t-4 border-[#2C3E50] text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Tu punto de partida es:</p>
                    <h3 className="text-2xl font-bold text-[#2C3E50]">La Herida de {resultado}</h3>
                    <p className="text-sm text-gray-500 mt-2">Has dado el primer paso hacia tu sanación.</p>
                </div>
            )}
        </div>
    );
}