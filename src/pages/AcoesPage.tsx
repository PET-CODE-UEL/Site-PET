import { useState } from 'react';
import ActionCircle from '../components/ActionCircle';
import SubmenuOverlay from '../components/SubmenuOverlay';
import ActionDetailsModal from '../components/ActionDetailsModal';

// Action data structure for the submenu items
interface ActionItem {
  id: string;
}

// Action details interface
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

// Main areas with their respective action items
const areaActions: Record<string, ActionItem[]> = {
  computacao: [
    { id: "01" },
    { id: "02" },
    { id: "03" },
    { id: "04" },
    { id: "05" },
    { id: "06" },
    { id: "07" },
    { id: "08" },
  ],
  design: [
    { id: "01" },
    { id: "02" },
    { id: "03" },
    { id: "04" },
    { id: "05" },
    { id: "06" },
    { id: "07" },
    { id: "08" },
  ],
  dados: [
    { id: "01" },
    { id: "02" },
    { id: "03" },
    { id: "04" },
    { id: "05" },
    { id: "06" },
    { id: "07" },
    { id: "08" },
  ]
};

// Sample action details data
const actionDetailsData: Record<string, Record<string, ActionDetails>> = {
  computacao: {
    "01": {
      id: "01",
      area: "computacao",
      title: "Desenvolvimento Web",
      image: "/api/placeholder/600/400", // Will use Lorem Picsum dynamically
      participants: ["Aluno 1", "Aluno 2", "Aluno 3"],
      activities: ["Frontend Development", "Backend API", "Database Design"],
      results: ["Website Funcional", "API REST", "Documentação"],
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus lectus est endu at elit, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus lectus est endu at elit, consectetur adipiscing elit."
    },
    "02": {
      id: "02",
      area: "computacao",
      title: "Aplicativo Mobile",
      image: "/api/placeholder/600/400",
      participants: ["Aluno 4", "Aluno 5"],
      activities: ["UI/UX Design", "Mobile Development"],
      results: ["App iOS/Android", "Prototipo"],
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus lectus est endu at elit."
    },
    "03": {
      id: "03",
      area: "computacao",
      title: "Sistema de Gestão",
      image: "/api/placeholder/600/400",
      participants: ["Aluno 6", "Aluno 7", "Aluno 8"],
      activities: ["Análise de Requisitos", "Desenvolvimento", "Testes"],
      results: ["Sistema Web", "Manual do Usuário", "Relatórios"],
      about: "Sistema completo de gestão para organizações acadêmicas com funcionalidades avançadas de controle e monitoramento."
    },
    "04": {
      id: "04",
      area: "computacao",
      title: "Inteligência Artificial",
      image: "/api/placeholder/600/400",
      participants: ["Aluno 9", "Aluno 10"],
      activities: ["Machine Learning", "Deep Learning", "Processamento de Linguagem Natural"],
      results: ["Modelo Treinado", "API de Predição", "Análise de Performance"],
      about: "Desenvolvimento de soluções baseadas em IA para automatização de processos e análise preditiva."
    },
    "05": {
      id: "05",
      area: "computacao",
      title: "Segurança Digital",
      image: "/api/placeholder/600/400",
      participants: ["Aluno 11", "Aluno 12"],
      activities: ["Auditoria de Segurança", "Implementação de Protocolos", "Testes de Penetração"],
      results: ["Relatório de Vulnerabilidades", "Políticas de Segurança", "Sistema Protegido"],
      about: "Projeto focado em fortalecer a segurança digital através de análises e implementações de medidas preventivas."
    },
    "06": {
      id: "06",
      area: "computacao",
      title: "Cloud Computing",
      image: "/api/placeholder/600/400",
      participants: ["Aluno 13", "Aluno 14", "Aluno 15"],
      activities: ["Migração para Cloud", "Otimização de Recursos", "Monitoramento"],
      results: ["Infraestrutura Cloud", "Redução de Custos", "Alta Disponibilidade"],
      about: "Implementação e gerenciamento de soluções em nuvem para melhorar escalabilidade e reduzir custos operacionais."
    },
    "07": {
      id: "07",
      area: "computacao",
      title: "DevOps e CI/CD",
      image: "/api/placeholder/600/400",
      participants: ["Aluno 16", "Aluno 17"],
      activities: ["Automação de Deploy", "Monitoramento Contínuo", "Integração Contínua"],
      results: ["Pipeline Automatizado", "Redução de Bugs", "Deploy Rápido"],
      about: "Implementação de práticas DevOps para acelerar o desenvolvimento e melhorar a qualidade do software."
    },
    "08": {
      id: "08",
      area: "computacao",
      title: "Blockchain",
      image: "/api/placeholder/600/400",
      participants: ["Aluno 18", "Aluno 19", "Aluno 20"],
      activities: ["Smart Contracts", "DApps", "Tokenização"],
      results: ["Aplicação Descentralizada", "Token Personalizado", "Contratos Inteligentes"],
      about: "Exploração das tecnologias blockchain para criar soluções descentralizadas e seguras."
    }
  },
  design: {
    "01": {
      id: "01",
      area: "design",
      title: "Identidade Visual",
      image: "/api/placeholder/600/400",
      participants: ["Designer 1", "Designer 2"],
      activities: ["Logo Design", "Brand Guidelines", "Paleta de Cores"],
      results: ["Manual de Marca", "Assets Visuais", "Templates"],
      about: "Criação de identidade visual completa para fortalecer a presença e reconhecimento da marca."
    },
    "02": {
      id: "02",
      area: "design",
      title: "UX/UI Design",
      image: "/api/placeholder/600/400",
      participants: ["Designer 3", "Designer 4", "Designer 5"],
      activities: ["Pesquisa de Usuário", "Wireframes", "Protótipos"],
      results: ["Interface Intuitiva", "Prototipo Funcional", "Teste de Usabilidade"],
      about: "Design centrado no usuário para criar experiências digitais engajantes e funcionais."
    },
    "03": {
      id: "03",
      area: "design",
      title: "Design Gráfico",
      image: "/api/placeholder/600/400",
      participants: ["Designer 6", "Designer 7"],
      activities: ["Materiais Impressos", "Design Digital", "Ilustrações"],
      results: ["Cartazes", "Banners", "Infográficos"],
      about: "Criação de materiais gráficos para comunicação visual efetiva em diferentes mídias."
    },
    "04": {
      id: "04",
      area: "design",
      title: "Motion Graphics",
      image: "/api/placeholder/600/400",
      participants: ["Designer 8", "Designer 9"],
      activities: ["Animações 2D", "Video Editing", "After Effects"],
      results: ["Videos Promocionais", "Animações Web", "Apresentações Dinâmicas"],
      about: "Desenvolvimento de conteúdo audiovisual animado para engajar e comunicar mensagens de forma dinâmica."
    },
    "05": {
      id: "05",
      area: "design",
      title: "Design Thinking",
      image: "/api/placeholder/600/400",
      participants: ["Designer 10", "Designer 11", "Designer 12"],
      activities: ["Workshops", "Ideação", "Prototipagem Rápida"],
      results: ["Soluções Inovadoras", "Metodologias", "Processos Otimizados"],
      about: "Aplicação da metodologia Design Thinking para resolver problemas complexos de forma criativa."
    },
    "06": {
      id: "06",
      area: "design",
      title: "Fotografia",
      image: "/api/placeholder/600/400",
      participants: ["Fotógrafo 1", "Fotógrafo 2"],
      activities: ["Sessões Fotográficas", "Edição", "Produção"],
      results: ["Banco de Imagens", "Portfolio", "Material Visual"],
      about: "Produção fotográfica profissional para documentar eventos e criar conteúdo visual de qualidade."
    },
    "07": {
      id: "07",
      area: "design",
      title: "Ilustração Digital",
      image: "/api/placeholder/600/400",
      participants: ["Ilustrador 1", "Ilustrador 2", "Ilustrador 3"],
      activities: ["Concept Art", "Character Design", "Storyboards"],
      results: ["Ilustrações Personalizadas", "Personagens", "Narrativas Visuais"],
      about: "Criação de ilustrações digitais originais para diversos propósitos comunicacionais e artísticos."
    },
    "08": {
      id: "08",
      area: "design",
      title: "Design de Produto",
      image: "/api/placeholder/600/400",
      participants: ["Designer 13", "Designer 14"],
      activities: ["Research", "Ideação", "Prototipagem"],
      results: ["Produto Funcional", "Testes de Mercado", "Feedback de Usuários"],
      about: "Desenvolvimento de produtos físicos através de metodologias de design centrado no usuário."
    }
  },
  dados: {
    "01": {
      id: "01",
      area: "dados",
      title: "Análise de Dados",
      image: "/api/placeholder/600/400",
      participants: ["Analista 1", "Analista 2", "Analista 3"],
      activities: ["Coleta de Dados", "Processamento", "Visualização"],
      results: ["Dashboard", "Relatórios", "Insights"],
      about: "Análise aprofundada de dados para gerar insights valiosos e apoiar tomadas de decisão estratégicas."
    },
    "02": {
      id: "02",
      area: "dados",
      title: "Machine Learning",
      image: "/api/placeholder/600/400",
      participants: ["Cientista 1", "Cientista 2"],
      activities: ["Feature Engineering", "Model Training", "Validation"],
      results: ["Modelo Preditivo", "Acurácia 95%", "API de Predição"],
      about: "Desenvolvimento de modelos de machine learning para automatizar processos e prever comportamentos."
    },
    "03": {
      id: "03",
      area: "dados",
      title: "Big Data",
      image: "/api/placeholder/600/400",
      participants: ["Engenheiro 1", "Engenheiro 2", "Analista 4"],
      activities: ["Data Pipeline", "ETL Processes", "Data Warehousing"],
      results: ["Infraestrutura Escalável", "Processamento em Tempo Real", "Data Lake"],
      about: "Implementação de soluções para processamento e análise de grandes volumes de dados."
    },
    "04": {
      id: "04",
      area: "dados",
      title: "Business Intelligence",
      image: "/api/placeholder/600/400",
      participants: ["Analista 5", "Analista 6"],
      activities: ["KPI Definition", "Dashboard Creation", "Report Automation"],
      results: ["Dashboards Executivos", "Relatórios Automatizados", "Métricas de Performance"],
      about: "Criação de soluções de BI para monitoramento de performance e apoio à gestão estratégica."
    },
    "05": {
      id: "05",
      area: "dados",
      title: "Data Visualization",
      image: "/api/placeholder/600/400",
      participants: ["Designer 15", "Analista 7"],
      activities: ["Storytelling with Data", "Interactive Charts", "Infographics"],
      results: ["Visualizações Interativas", "Narrativas de Dados", "Dashboards Intuitivos"],
      about: "Transformação de dados complexos em visualizações claras e impactantes para facilitar a compreensão."
    },
    "06": {
      id: "06",
      area: "dados",
      title: "Data Mining",
      image: "/api/placeholder/600/400",
      participants: ["Cientista 3", "Cientista 4", "Analista 8"],
      activities: ["Pattern Recognition", "Clustering", "Association Rules"],
      results: ["Padrões Descobertos", "Segmentação de Clientes", "Regras de Associação"],
      about: "Mineração de dados para descobrir padrões ocultos e gerar conhecimento útil para o negócio."
    },
    "07": {
      id: "07",
      area: "dados",
      title: "Statistical Analysis",
      image: "/api/placeholder/600/400",
      participants: ["Estatístico 1", "Estatístico 2"],
      activities: ["Hypothesis Testing", "Regression Analysis", "Time Series"],
      results: ["Análises Estatísticas", "Modelos Matemáticos", "Previsões"],
      about: "Aplicação de métodos estatísticos avançados para análise rigorosa e validação de hipóteses."
    },
    "08": {
      id: "08",
      area: "dados",
      title: "Data Quality",
      image: "/api/placeholder/600/400",
      participants: ["Engenheiro 3", "Analista 9"],
      activities: ["Data Profiling", "Cleansing", "Validation"],
      results: ["Dados Limpos", "Processos de Qualidade", "Monitoramento Contínuo"],
      about: "Garantia da qualidade dos dados através de processos rigorosos de limpeza e validação."
    }
  }
};

// Area configurations
const areaConfigs = {
  computacao: {
    title: 'Computação',
    color: '#135D9F'
  },
  design: {
    title: 'Design',
    color: '#ED701F'
  },
  dados: {
    title: 'Ciência de Dados',
    color: '#248BE5'
  }
};

const AcoesPage = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<ActionDetails | null>(null);
  
  // Toggle selected area
  const toggleArea = (area: string) => {
    if (selectedArea === area) {
      setSelectedArea(null);
    } else {
      setSelectedArea(area);
    }
  };

  // Handle action selection
  const handleActionSelect = (actionId: string) => {
    if (selectedArea && actionDetailsData[selectedArea] && actionDetailsData[selectedArea][actionId]) {
      setSelectedAction(actionDetailsData[selectedArea][actionId]);
    }
  };

  // Close action details modal
  const closeActionDetails = () => {
    setSelectedAction(null);
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
      {/* Main circles grid - 85% width */}
      <div className="w-[85%] flex justify-center items-center">
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 z-10 transition-all duration-500 ${selectedArea ? 'opacity-90 scale-95' : 'opacity-100'}`}>
          {Object.entries(areaConfigs).map(([key, config]) => (
            <ActionCircle
              key={key}
              title={config.title}
              color={config.color}
              isSelected={selectedArea === key}
              onClick={() => toggleArea(key)}
            />
          ))}
        </div>
      </div>

      {/* Submenu overlay */}
      {selectedArea && (
        <SubmenuOverlay
          selectedArea={selectedArea}
          actions={areaActions[selectedArea] || []}
          onActionSelect={handleActionSelect}
        />
      )}

      {/* Close button - positioned at top-right of layout body */}
      {selectedArea && (
        <button 
          className="close-button fixed top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center transition-all duration-300 shadow-xl z-50 hover:scale-102 hover:opacity-80"
          onClick={() => setSelectedArea(null)}
          style={{
            transform: 'translateY(-16rem)',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
          aria-label="Close menu"
        >
          <span className="text-white text-xl sm:text-2xl font-bold leading-none" 
                style={{ 
                  fontFamily: 'monospace',
                  fontWeight: '900',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                }}>
            ×
          </span>
        </button>
      )}

      {/* Action Details Modal */}
      {selectedAction && (
        <ActionDetailsModal 
          action={selectedAction}
          onClose={closeActionDetails}
        />
      )}
    </div>
  );
};

export default AcoesPage;

