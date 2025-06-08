import AreaCard from "../components/AreaCard";

// A página de Ações agora exibe as três principais áreas de atuação
// do PET-CODE usando o componente reutilizável AreaCard.
export default function AcoesPage() {
  return (
    <div className="container mx-auto px-6 py-16 flex flex-col items-center">
      {/* Container principal que organiza os cards em linha e os centraliza */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
        <AreaCard
          bgColor="#2E6E9E" // Azul para Computação
          title="Computação"
        />
        <AreaCard
          bgColor="#EA7F28" // Laranja para Design
          title="Design"
        />
        <AreaCard
          bgColor="#36A2EB" // Azul claro para Ciência de Dados
          title="Ciência de Dados"
        />
      </div>
    </div>
  );
}
