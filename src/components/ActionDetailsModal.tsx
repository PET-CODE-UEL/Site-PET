import React from 'react';

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

const ActionDetailsModal: React.FC<ActionDetailsModalProps> = ({ action, onClose }) => {
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop blur */}
      <div 
        className="absolute inset-4 top-28 rounded-3xl"
        style={{ opacity: 1, backdropFilter: 'blur(60px)' }}
        onClick={onClose}
      />
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-4 top-28 bg-black rounded-3xl"
        style={{ opacity: 0.4, backdropFilter: 'blur(60px)' }}
        onClick={onClose}
      />
      
      {/* Close button - positioned absolute to top-right of page */}
      <button 
        className="close-button absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-80"
        onClick={onClose}
        style={{
          top: "10%",
          left: "96%",
          margin: '10px',
          zIndex: 9999,
          border: '3px solid rgba(0, 0, 0, 0.3)',
          //boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(0, 0, 0, 0.2)',
        }}
        aria-label="Close details"
      >
        <span className="text-black text-xl sm:text-2xl font-bold leading-none" 
              style={{ 
                fontFamily: 'monospace',
                fontWeight: '900',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
              }}>
          ×
        </span>
      </button>
      
      {/* Modal content */}
      <div className="absolute inset-16 top-40 rounded-3xl grid grid-cols-2 gap-8" style={{ gridTemplateRows: '65% 35%' }}>        {/* Top left area - 25% */}
        <div className="rounded-lg p-4">
          <img 
            src={action.image} 
            alt={action.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        
        {/* Top right area - 25% */}
        <div className="rounded-lg p-4 text-white">
          <h2 className="text-5xl font-bold" style={{ marginBottom: '1rem' }}>{action.title}</h2>
          
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Petianos envolvidos:</h3>
            <ul className="space-y-1 text-base">
              {action.participants.map((participant, index) => (
                <li key={index}>- {participant}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Atividades em desenvolvimento:</h3>
            <ul className="space-y-1 text-base">
              {action.activities.map((activity, index) => (
                <li key={index}>- {activity}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Resultados:</h3>
            <ul className="space-y-1 text-base">
              {action.results.map((result, index) => (
                <li key={index}>- {result}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom area - 50% (spans both columns) */}
        <div className="col-span-2 rounded-lg p-4 text-white">
          <h2 className="text-3xl font-bold" style={{ marginBottom: '1rem' }}>Sobre a Ação</h2>
          <p className="text-lg leading-relaxed">
            {action.about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionDetailsModal;
