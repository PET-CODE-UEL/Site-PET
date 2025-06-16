const ProjetosPage = () => {
  const projects = [
    {
      title: "Sistema de Gestão Acadêmica",
      category: "Computação",
      description: "Desenvolvimento de um sistema completo para gestão de cursos e estudantes.",
      color: "#135D9F" // Using our specified Computação color
    },
    {
      title: "Interface para E-commerce",
      category: "Design",
      description: "Design de interface moderna e responsiva para plataforma de vendas online.",
      color: "#ED701F" // Using our specified Design color
    },
    {
      title: "Análise de Dados Educacionais",
      category: "Ciência de Dados",
      description: "Estudo de padrões de aprendizagem utilizando machine learning.",
      color: "#248BE5" // Using our specified Ciência de Dados color
    },
    {
      title: "App Mobile para Estudantes",
      category: "Computação",
      description: "Aplicativo móvel para auxiliar estudantes em suas atividades acadêmicas.",
      color: "#135D9F"
    },
    {
      title: "Branding para Startups",
      category: "Design",
      description: "Criação de identidade visual completa para empresas nascentes.",
      color: "#ED701F"
    },
    {
      title: "Dashboard de Métricas",
      category: "Ciência de Dados",
      description: "Visualização interativa de dados empresariais em tempo real.",
      color: "#248BE5"
    }
  ];

  return (
    <>
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nossos Projetos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-32" style={{ backgroundColor: project.color }}></div>
              <div className="p-6">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjetosPage;
