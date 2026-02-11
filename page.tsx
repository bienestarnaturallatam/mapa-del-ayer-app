export default function MapaDelAyer() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-serif text-[#2C3E50] mb-4 italic">EL MAPA DEL AYER</h1>
      <p className="text-xl text-gray-500 mb-8 italic">"No estás aquí para arreglarte, porque no estás roto."</p>

      <div className="max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">El Despertar</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Bienvenido. Este es un espacio seguro diseñado para que te encuentres con la persona más importante de tu vida: tú mismo.
        </p>
        <button className="w-full bg-[#2C3E50] text-white font-bold py-4 rounded-2xl hover:bg-opacity-90 transition">
          COMENZAR MI VIAJE
        </button>
      </div>
    </div>
  );
}
