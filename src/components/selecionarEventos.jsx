import React, { useState, useEffect } from "react";
import ativoImage from './ativo-21-1.png';
import setaEsquerda from './setaEsquerda.svg';
import setaDireita from './setaDireita.svg';
import "./selecionarEventos.css";
import evento1 from './evento1.jpg';
import evento2 from './evento2.jpg';
import evento3 from './evento3.jpg';

const cards = [
  { id: 1, image: evento1 },
  { id: 2, image: evento2 },
  { id: 3, image: evento3 },
];

export default function Eventos() {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {

    document.body.style.backgroundColor = "#135d9f";

    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, []);

  const handleLeftClick = () => {
    setCenterIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleRightClick = () => {
    setCenterIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="selecionarEventos">
      <div className="div">
        <img className="ativo" src={ativoImage} alt="Ativo" />

        <div className="component">
          {["Quem somos", "Projetos", "Ações", "Eventos"].map((text, i) => (
            <div className="wrapper" key={i}>
              <div className="div-wrapper">
                <div className="text-wrapper">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Carousel-container">
        <h2 className="titulo-evento">Eventos {cards[centerIndex].id}</h2>
        <div className="Carousel">
          {cards.map((card, index) => {
            let className = "Carousel-card";
            if (index === centerIndex) className += " center";
            else if ((index + 1) % cards.length === centerIndex) className += " left";
            else className += " right";

            return (
              <div key={card.id} className={className}>
                <img src={card.image} alt={`Evento ${card.id}`} className="carousel-image" />
              </div>


            );
          })}
        </div>

        <div className="arrow-controls">
          <img
            src={setaEsquerda}
            alt="Anterior"
            className="arrow arrow-bottom"
            onClick={handleLeftClick}
          />
          <img
            src={setaDireita}
            alt="Próximo"
            className="arrow arrow-bottom"
            onClick={handleRightClick}
          />
        </div>
      </div>
    </div>
  );
}
