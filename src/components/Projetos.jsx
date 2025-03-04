import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Projetos.module.css";
import img1 from "../img/calculadora.png";
import img2 from "../img/clima.png";
import img3 from "../img/image.png";
import img4 from "../img/link.png";
import img5 from "../img/jogodavelha.png";
import img6 from "../img/snakeGame.png";

import { register } from "swiper/element/bundle";
register();

function Projetos() {
    const data = [
        {
            id: "1",
            image: img1,
            title: "Calculadora",
            text: " Calculadora desenvolvida com HTML, CSS e Javascript. Todos os calculos são executados através da função eval() do Javascript fazendo assim com que não seja necessário desenvolver as funcionalidades de cada tipo de calculo separadamente. ",
            link1: "https://github.com/WilliamRibeiR0/calculadora",
            link2: "https://williamribeir0.github.io/calculadora/",
        },
        {
            id: "2",
            image: img2,
            title: "Clima",
            text: "Este projeto é o layout statico (os valores não estão sendo consumido por uma api) de uma aplicação de previsão do tempo, foi adicionado responsividade e o projeto foi desenvolvido usando HTML e CSS.",
            link1: "https://github.com/WilliamRibeiR0/Clima",
            link2: "https://williamribeir0.github.io/Clima/",
        },
        {
            id: "3",
            image: img3,
            title: "Login Form",
            text: "Escrevendo...",
            link1: "https://github.com/WilliamRibeiR0/LoginForm",
            link2: "https://login-form-tan-tau.vercel.app/",
        },
        {
            id: "4",
            image: img4,
            title: "Link",
            text: "Escrevendo...",
            link1: "https://github.com/WilliamRibeiR0/devLink",
            link2: "https://dev-link-three.vercel.app/",
        },
        {
            id: "5",
            image: img5,
            title: "Jogo da Velha",
            text: " A logica do jogo consiste em existe um array com 9 espacos vazios, sempre que o usuario clicar em um espaço vazio, sera atribuido o valor 'X' ou 'O' baseado em quem for o jogador atual.",
            link1: "https://github.com/WilliamRibeiR0/jogo_da_velha",
            link2: "https://williamribeir0.github.io/jogo_da_velha/",
        },
        {
            id: "6",
            image: img6,
            title: "Snake Game",
            text: "Escrevendo...",
            link1: "https://github.com/WilliamRibeiR0/snake-Game",
            link2: "https://snake-nu-beryl.vercel.app/",
        },
    ];
    return (
        <div className={styles.container} id="projetos">
            <h1 className={styles.title}>Projetos</h1>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className={styles.fatherSlide}>
                        <div className={styles.slide}>
                            <img
                                src={item.image}
                                alt="slide"
                                className={styles.slide_item}
                            />
                            <div className={styles.box_info}>
                                <h2 className={styles.slide_text}>
                                    {item.title}
                                </h2>
                                <p>{item.text}</p>
                                <div className={styles.button}>
                                    <a
                                        href={item.link1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver Code
                                    </a>
                                    <a
                                        href={item.link2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver Projeto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Projetos;
