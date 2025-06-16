const EventosPage = () => {
  const events = [
    {
      title: "Semana da Tecnologia",
      date: "15-19 Julho, 2025",
      time: "14:00 - 18:00",
      location: "Campus Principal",
      description: "Uma semana completa de palestras, workshops e demonstrações das mais recentes inovações tecnológicas.",
      category: "Conferência",
      status: "upcoming",
      color: "#135D9F" // Computação color
    },
    {
      title: "Workshop: Introdução ao React",
      date: "28 Junho, 2025",
      time: "09:00 - 17:00",
      location: "Lab de Informática",
      description: "Aprenda os fundamentos do React e desenvolva sua primeira aplicação web moderna.",
      category: "Workshop",
      status: "upcoming",
      color: "#248BE5" // Ciência de Dados color
    },
    {
      title: "Palestra: IA na Medicina",
      date: "20 Maio, 2025",
      time: "19:00 - 21:00",
      location: "Auditório Central",
      description: "Discussão sobre como a inteligência artificial está revolucionando o setor de saúde.",
      category: "Palestra",
      status: "past",
      color: "#135D9F" // Computação color
    },
    {
      title: "Hackathon: Soluções Sustentáveis",
      date: "5-7 Setembro, 2025",
      time: "Evento completo",
      location: "Centro de Inovação",
      description: "48 horas de desenvolvimento intensivo focado em soluções para problemas ambientais.",
      category: "Competição",
      status: "upcoming",
      color: "#ED701F" // Design color
    }
  ];

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  return (
    <>
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Eventos
        </h1>
        
        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Próximos Eventos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6" style={{ borderLeft: `4px solid ${event.color}` }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ color: event.color, backgroundColor: `${event.color}20` }}>
                    {event.category}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🕒</span>
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
                
                <button 
                  className="mt-4 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: event.color }}
                >
                  Inscrever-se
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Eventos Anteriores</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 opacity-75" style={{ borderLeft: `4px solid ${event.color || '#888'}` }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🕒</span>
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default EventosPage;
