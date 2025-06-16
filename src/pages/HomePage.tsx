const HomePage = () => {
  return (
    <>
      <div className="max-w-6xl w-full py-12 text-center mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          Bem-vindo ao PET CODE
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Programa de Educação Tutorial em Ciência da Computação
        </p>
        
        {/* Hero Section with Code Illustration */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 rounded-lg shadow-xl text-white mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Nosso Objetivo</h2>
            <p className="text-xl">
              Desenvolver excelência acadêmica através da integração entre ensino, pesquisa e extensão.
            </p>
          </div>
          
          <div className="bg-black/30 p-5 rounded-md text-left inline-block">
            <code className="text-green-300 font-mono">
              <div>function petCode() {'{'}</div>
              <div className="ml-4">return 'Excelência em Computação';</div>
              <div>{'}'}</div>
            </code>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/quem-somos" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quem Somos</h3>
            <p className="text-gray-600">Conheça nossa equipe e história</p>
          </a>
          
          <a href="/projetos" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Projetos</h3>
            <p className="text-gray-600">Descubra o que estamos construindo</p>
          </a>
          
          <a href="/acoes" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ações</h3>
            <p className="text-gray-600">Nossas áreas de atuação</p>
          </a>
          
          <a href="/eventos" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Eventos</h3>
            <p className="text-gray-600">Participe dos próximos encontros</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
