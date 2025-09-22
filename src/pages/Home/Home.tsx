export default function Home() {
  return (
    <section className="min-h-[calc(100svh-4rem)] bg-[#ED701F] overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      {/* SVG from public/ */}
      <img
        src="/em_construcao.svg"
        alt="Página em construção"
        className="w-[clamp(220px,80vw,520px)] max-w-full flex-shrink-0"
      />

      {/* Message below the image */}
      <h1 className="mt-10 text-2xl md:text-3xl font-bold text-black flex-shrink-0">
        Estamos trabalhando...
      </h1>
    </section>
  );
}

