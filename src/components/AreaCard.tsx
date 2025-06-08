interface AreaCardProps {
  bgColor: string;  // A cor de fundo do círculo (ex: '#EA7F28')
  title: string;    // O título que aparecerá abaixo do círculo
  onClick: () => void; // Função a ser executada no clique
}

export default function AreaCard({ bgColor, title, onClick }: AreaCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-6 transition-transform duration-300 ease-in-out hover:scale-105"
      aria-label={`Ver ações de ${title}`}
    >
      {/* O círculo */}
      <div
        className="h-48 w-48 rounded-full shadow-lg md:h-64 md:w-64"
        style={{ backgroundColor: bgColor }}
      ></div>
      {/* O título abaixo do círculo */}
      <h3 className="font-sans text-xl font-bold">{title}</h3>
    </button>
  );
}

