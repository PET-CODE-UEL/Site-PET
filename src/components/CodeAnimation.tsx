import AnimatedEye from "./AnimatedEye";

const CodeAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="flex flex-col items-center space-y-12">
        <div className="animate-item relative">
          <div className="absolute z-0 top-0 left-0 w-full h-full flex items-start justify-center pt-16">
            <AnimatedEye 
              size={55} 
              pupilSize={30}
              className="shadow-lg"
              left="-60px"
              top="65px"
            />
          </div>
          
          <img 
            src="/code.svg" 
            className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>   
      </div>
    </div>
  );
};

export default CodeAnimation;