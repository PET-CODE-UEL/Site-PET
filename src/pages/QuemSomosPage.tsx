const QuemSomosPage = () => {
  return (
    <>
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Quem Somos
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            O PET CODE é um grupo de educação tutorial que visa promover a integração entre 
            ensino, pesquisa e extensão nas áreas de Computação, Design e Ciência de Dados.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nosso objetivo é formar profissionais qualificados e engajados com a sociedade, 
            desenvolvendo projetos inovadores e contribuindo para o avanço da tecnologia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4" style={{ backgroundColor: '#135D9F' }}></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Computação</h3>
              <p className="text-gray-600">Desenvolvimento de software e soluções tecnológicas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4" style={{ backgroundColor: '#ED701F' }}></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Design</h3>
              <p className="text-gray-600">Criação de interfaces e experiências digitais</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4" style={{ backgroundColor: '#248BE5' }}></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ciência de Dados</h3>
              <p className="text-gray-600">Análise e interpretação de dados complexos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuemSomosPage;
