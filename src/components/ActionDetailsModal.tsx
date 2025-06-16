import React from 'react';

// Dados de uma ação do PET
interface ActionDetails {
  id: string;
  area: string;
  title: string;
  image: string;
  participants: string[];
  activities: string[];
  results: string[];
  about: string;
}

interface ActionDetailsModalProps {
  action: ActionDetails;
  onClose: () => void;
}

// Modal que exibe os detalhes de uma ação do PET
const ActionDetailsModal: React.FC<ActionDetailsModalProps> = ({ action, onClose }) => {
  return (
    <div className="fixed inset-0 z-50">
      {/* Background overlay - full screen except navbar */}
      <div 
        className="absolute left-0 right-0 bottom-0 bg-black bg-opacity-40 backdrop-blur-md"
        style={{ top: '13vh' }}
        onClick={onClose}
      />
      
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white 
                   flex items-center justify-center transition-all duration-300 
                   hover:scale-105 hover:bg-gray-100 shadow-lg z-10
                   border-2 border-gray-200"
        onClick={onClose}
        style={{ top: 'calc(13vh + 1rem)' }}
        aria-label="Close details"
      >
        <span className="text-black text-xl lg:text-2xl font-bold leading-none">×</span>
      </button>
      
      {/* Modal content container - occupies full screen except navbar with padding */}
      <div 
        className="absolute left-4 right-4 bottom-4 overflow-hidden"
        style={{ top: 'calc(13vh + 1rem)' }}
      >
        {/* Content grid */}
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 p-4 lg:p-8">
          {/* Image section */}
          <div className="flex flex-col min-h-0">
            <div className="flex-1 rounded-xl overflow-hidden bg-white shadow-lg">
              <img 
                src={action.image} 
                alt={action.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content section */}
          <div className="flex flex-col min-h-0 text-white space-y-4 lg:space-y-6">
            {/* Title */}
            <div>
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4">
                {action.title}
              </h2>
            </div>
            
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto space-y-4 lg:space-y-6 pr-2">
              {/* Participants */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                  Petianos envolvidos:
                </h3>
                <ul className="space-y-1 text-sm lg:text-base">
                  {action.participants.map((participant, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{participant}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Activities */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                  Atividades em desenvolvimento:
                </h3>
                <ul className="space-y-1 text-sm lg:text-base">
                  {action.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Results */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                  Resultados:
                </h3>
                <ul className="space-y-1 text-sm lg:text-base">
                  {action.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* About section */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                  Sobre a Ação:
                </h3>
                <p className="text-sm lg:text-base leading-relaxed">
                  {action.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionDetailsModal;
