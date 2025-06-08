import { useState } from "react";
import AreaCard from "../components/AreaCard.tsx";
import SubmenuModal from "../components/SubmenuModal.tsx";

type Area = {
  title: string;
  color: string;
};

const areas: Area[] = [
  { title: "Computação", color: "#2E6E9E" },
  { title: "Design", color: "#EA7F28" },
  { title: "Ciência de Dados", color: "#36A2EB" },
];

export default function AcoesPage() {
  const [activeArea, setActiveArea] = useState<Area | null>(null);

  return (
    // O container principal ocupa 90% da altura da tela para centralizar verticalmente o conteúdo
    <div className="flex h-[90vh] items-center justify-center">
      <div className="container mx-auto flex w-full flex-wrap justify-around px-6">
        {areas.map((area) => (
          <AreaCard
            key={area.title}
            bgColor={area.color}
            title={area.title}
            onClick={() => setActiveArea(area)}
          />
        ))}
      </div>

      {/* Renderiza o modal de submenu se uma área estiver ativa */}
      {activeArea && (
        <SubmenuModal
          area={activeArea}
          onClose={() => setActiveArea(null)}
        />
      )}
    </div>
  );
}

