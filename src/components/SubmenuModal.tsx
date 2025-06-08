interface SubmenuModalProps {
  area: {
    title: string;
    color: string;
  };
  onClose: () => void;
}

// Componente para o submenu flutuante que aparece ao clicar em uma área.
export default function SubmenuModal({ area, onClose }: SubmenuModalProps) {
  return (
    // Overlay que cobre a tela inteira
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      {/* Container do modal */}
      <div className="relative z-50 w-11/12 max-w-4xl rounded-3xl bg-white p-8 shadow-2xl">
        {/* Botão para fechar */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition-transform hover:scale-110"
          aria-label="Fechar submenu"
        >
          &times;
        </button>

        {/* Conteúdo do submenu (placeholder) */}
        <h2
          className="mb-4 text-3xl font-bold"
          style={{ color: area.color }}
        >
          {area.title}
        </h2>
        <p className="text-gray-600">
          Aqui será exibido o conteúdo sobre as ações de {area.title.toLowerCase()}.
        </p>
        <p className="mt-6 text-sm italic">
          (Implementação do conteúdo detalhado pendente)
        </p>
      </div>
    </div>
  );
}

