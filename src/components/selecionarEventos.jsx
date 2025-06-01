import React, { useState, useEffect } from "react";
import ativoImage from './ativo-21-1.png';
import setaEsquerda from './setaEsquerda.svg';
import setaDireita from './setaDireita.svg';
import "./selecionarEventos.css";
import evento1 from './evento1.jpg';
import evento2 from './evento2.jpg';
import evento3 from './evento3.jpg';
import Evento1 from "./EventoDetalhe1";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const cards = [
  { id: 1, image: evento1, description: "Descrição do Evento 1" },
  { id: 2, image: evento2, description: "Descrição do Evento 2" },
  { id: 3, image: evento3, description: "Descrição do Evento 3" },
];

export default function Eventos() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [eventoAtivo, setEventoAtivo] = useState(null); // null ou id do evento aberto

  useEffect(() => {
    document.body.style.backgroundColor = "#135d9f";
    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, []);

  const handleLeftClick = () => {
    if (eventoAtivo === null) {
      setCenterIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const handleRightClick = () => {
    if (eventoAtivo === null) {
      setCenterIndex((prev) => (prev + 1) % cards.length);
    }
  };

  const handleCardClick = (cardId) => {
    setEventoAtivo(cardId); // ativa o evento selecionado
  };

  const handleCloseEvento = () => {
    setEventoAtivo(null); // fecha qualquer evento ativo
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

      <div className={`Carousel-container ${eventoAtivo ? "inactive" : ""}`}>
        <h2 className="titulo-evento">Eventos {cards[centerIndex].id}</h2>
        <div className="Carousel">
          {cards.map((card, index) => {
            let className = "Carousel-card";
            if (index === centerIndex) className += " center";
            else if ((index + 1) % cards.length === centerIndex) className += " left";
            else className += " right";

            return (
              <div
                key={card.id}
                className={className}
                onClick={() => handleCardClick(card.id)}
              >
                <img
                  src={card.image}
                  alt={`Evento ${card.id}`}
                  className="carousel-image"
                />
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

      {eventoAtivo === 1 && <Evento1 onClose={handleCloseEvento} />}
    </div>
  );
}