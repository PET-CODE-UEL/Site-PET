import React from 'react';
import DynamicBlob from './DynamicBlob';

interface ActionItem {
  id: string;
}

interface SubmenuOverlayProps {
  selectedArea: string;
  actions: ActionItem[];
  onActionSelect?: (actionId: string) => void;
}

// Overlay que exibe o submenu com blob dinâmico e ações
const SubmenuOverlay: React.FC<SubmenuOverlayProps> = ({ selectedArea, actions, onActionSelect }) => {
  // Define a cor do blob baseada na área selecionada
  const getBackgroundColor = (area: string) => {
    switch (area) {
      case 'design':
        return '#ED701F';
      case 'computacao':
        return '#135D9F';
      case 'dados':
        return '#248BE5';
      default:
        return '#ED701F';
    }
  };

  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Container do blob dinâmico */}
      <div 
        className="relative flex flex-col justify-center items-center"
        style={{
          width: '98vw',
          height: '85vh',
          maxWidth: '1600px',
          maxHeight: '800px',
        }}
      >
        {/* Blob animado de fundo */}
        <DynamicBlob
          color={getBackgroundColor(selectedArea)}
          width={Math.min(window.innerWidth * 0.98, 1600)}
          height={Math.min(window.innerHeight * 0.85, 800)}
        />

        {/* Grid de ações posicionado sobre o blob */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 mx-auto px-6">
            {actions.map((action) => (
              <div key={action.id} className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg mb-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => onActionSelect?.(action.id)}
                >
                </div>
                <span className="text-white text-xs sm:text-sm lg:text-base font-mono font-semibold">
                  Ação {action.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmenuOverlay;
