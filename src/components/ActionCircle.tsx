import React from 'react';

interface ActionCircleProps {
  title: string;        // Título que será exibido abaixo do círculo
  color: string;        // Cor de fundo do círculo (formato hex, rgb, etc.)
  isSelected: boolean;  // Estado que indica se o círculo está selecionado
  onClick: () => void;  // Função callback executada quando o círculo é clicado
}

// Componente que renderiza um círculo interativo com título
// Usado para representar ações ou categorias clicáveis
const ActionCircle: React.FC<ActionCircleProps> = ({
  title,
  color,
  isSelected,
  onClick
}) => {
  return (
    // Container principal: flexbox vertical centralizado
    <div className="flex flex-col items-center text-center">
      {/* Círculo principal */}
      <div
        className={`
          rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl
          w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem]
          ${isSelected ? 'scale-110' : 'hover:scale-105'}
        `}
        style={{ backgroundColor: color }} // Cor dinâmica aplicada via style
        onClick={onClick}
      />
      {/* Título responsivo com tamanhos adaptativos por breakpoint */}
      <h2 className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 font-mono">
        {title}
      </h2>
    </div>
  );
};

export default ActionCircle;
