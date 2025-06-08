// Define a estrutura das propriedades que o componente espera receber.
interface AreaCardProps {
  bgColor: string;  // A cor de fundo do círculo (ex: '#EA7F28')
  title: string;    // O título que aparecerá abaixo do círculo
}

// O componente AreaCard é responsável por renderizar um círculo
// colorido com um título. É projetado para ser reutilizável.
export default function AreaCard({ bgColor, title }: AreaCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* O círculo */}
      <div
        className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-lg"
        style={{ backgroundColor: bgColor }}
      ></div>
      {/* O título abaixo do círculo */}
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
  );
}

