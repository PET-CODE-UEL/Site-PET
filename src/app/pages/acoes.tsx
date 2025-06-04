import React from "react";
import { MouseBlob } from "../../components/MouseBlob";
import { CircleInteraction } from "../../components/CircleInteraction";
import "../../styles/acoes.css";

const Acoes: React.FC = () => {
  return (
    <>
      <MouseBlob />
      <div className="bg-white flex px-16 pt-10 pb-60 flex-col overflow-hidden">
        <div className="flex w-full max-w-[1295px] items-start gap-5 font-['Cascadia_Code'] text-[22px] text-black font-bold text-center flex-wrap justify-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f30b98a518262143c92359a2aa7e100d7d10448a?placeholderIfAbsent=true"
            className="aspect-[4.15] object-contain object-center w-[133px] mt-3 flex-shrink-0 max-w-full"
            alt="Logo"
          />

          <div className="flex items-stretch gap-[79px] flex-wrap">
            <div className="flex min-h-[43px] px-2.5 py-2.5 flex-col items-stretch justify-center">
              <div className="z-10">Quem somos</div>
            </div>
            <div className="flex min-h-[43px] px-2.5 py-2.5 flex-col items-stretch whitespace-nowrap justify-center">
              <div className="z-10">Projetos</div>
            </div>
            <div className="flex min-h-[43px] px-2.5 py-2.5 flex-col items-stretch whitespace-nowrap justify-center">
              <div className="z-10">Ações</div>
            </div>
            <div className="flex min-h-[43px] px-2.5 py-2.5 flex-col items-stretch whitespace-nowrap justify-center">
              <div className="z-10">Eventos</div>
            </div>
          </div>
        </div>

        <div className="self-center mt-60 w-full max-w-[1291px]">
          <div className="columns-container">
            <div className="column">
              <CircleInteraction
                color="rgba(19, 93, 159, 1)"
                title="Computação"
              />
            </div>
            <div className="column">
              <CircleInteraction color="rgba(237, 112, 31, 1)" title="Design" />
            </div>
            <div className="column">
              <CircleInteraction
                color="rgba(36, 139, 229, 1)"
                title="Ciência de Dados"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acoes;
