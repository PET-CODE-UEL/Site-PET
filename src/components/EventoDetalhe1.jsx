import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import closeIcon from './close.svg';
import imagem1 from './imagem1.jpg';
import imagem2 from './imagem2.jpg';
import imagem3 from './imagem3.jpg';
import imagem4 from './imagem4.jpg';
import imagem5 from './imagem5.jpg';
import evento1 from './evento1.jpg';

export default function EventoDetalhe({ onClose }) {
  return (
    <div className="evento1 active">
      <button className="close-button" onClick={onClose}>
        <img src={closeIcon} alt="Fechar" />
      </button>
      <div className="content">
        <div className="contentText">
        <div className="content1">
          <img src={evento1} alt="Evento 1" />
          <div className="content1text">
            <h1>Evento</h1>
            <ul>
              <li>Petianos envolvidos:
                <ul>
                  <li>- Aluno 1</li>
                  <li>- Aluno 2</li>
                  <li>- Aluno 3</li>
                </ul>
              </li>
              <li>Atividades em desenvolvimento:
                <ul>
                  <li>- X</li>
                  <li>- Y</li>
                  <li>- Z</li>
                </ul>
              </li>
              <li>Resultados:
                <ul>
                  <li>- X</li>
                  <li>- Y</li>
                  <li>- Z</li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
        <div className="content2">
          <h1>Sobre o Evento</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim.</p>
        </div>
        <div className="evento1-slider">
          <Swiper
            loop={true}
            slidesPerView={5}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            initialSlide={3}
            modules={[Pagination, Navigation]}
            className="evento1Swiper"
          >
            {[imagem1, imagem2, imagem3, imagem4, imagem5, evento1].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="slide-content">
                  <img src={img} alt={`imagem ${i + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="content3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur ligula neque, id fermentum justo ullamcorper nec. Vivamus luctus est enim.</p>
      </div>
      </div>
      </div>
    </div>
  );
}
