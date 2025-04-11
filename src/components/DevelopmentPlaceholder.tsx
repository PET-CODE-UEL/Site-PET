const DevelopmentPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="flex flex-col items-center space-y-12">
        <div className="animate-item">
          <img 
            src="/focado.svg" 
            alt="Site em desenvolvimento" 
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="animate-item">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black text-center">
            Site em desenvolvimento...
          </h2>
        </div>
        <div className="animate-item">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPlaceholder;