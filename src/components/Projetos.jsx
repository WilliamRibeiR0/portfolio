import styles from "./Projetos.module.css";
import img1 from "../img/calculadora.png";
import img2 from "../img/clima.png";
import img3 from "../img/image.png";
import img4 from "../img/link.png";
import img5 from "../img/jogodavelha.png";
import img6 from "../img/snakeGame.png";

function Projetos() {
    return (
        <div className={styles.container} id="projetos">
            <h1>Projetos</h1>
            <div className={styles.card_container}>

                <div className={styles.card_article}>
                    <img src={img1} alt="imagem" className={styles.card_img} />
                    <div className={styles.card_data}>
                        <span className={styles.card_description}>
                            HTML, CSS, JavaScript.
                        </span>
                        <h2 className={styles.card_title}>Calculadora</h2>
                        <div className={styles.card_buttons}>
                            <a href="https://williamribeir0.github.io/calculadora/" target="blank" className={styles.card_button}>
                                Ver Projeto
                            </a>
                            <a href="https://github.com/WilliamRibeiR0/calculadora" target="blank" className={styles.card_button}>
                                Ver Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.card_article}>
                    <img src={img2} alt="imagem" className={styles.card_img} />
                    <div className={styles.card_data}>
                        <span className={styles.card_description}>
                        HTML, CSS. 
                        </span>
                        <h2 className={styles.card_title}>Clima</h2>
                        <div className={styles.card_buttons}>
                            <a href="https://williamribeir0.github.io/Clima/" target="blank" className={styles.card_button}>
                                Ver Projeto
                            </a>
                            <a href="https://github.com/WilliamRibeiR0/Clima?tab=readme-ov-file" target="blank" className={styles.card_button}>
                                Ver Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.card_article}>
                    <img src={img3} alt="imagem" className={styles.card_img} />
                    <div className={styles.card_data}>
                        <span className={styles.card_description}>
                        HTML, CSS.
                        </span>
                        <h2 className={styles.card_title}>Login Form</h2>
                        <div className={styles.card_buttons}>
                            <a href="https://login-form-tan-tau.vercel.app/" target="blank" className={styles.card_button}>
                                Ver Projeto
                            </a>
                            <a href="https://github.com/WilliamRibeiR0/LoginForm"  target="blank" className={styles.card_button}>
                                Ver Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.card_article}>
                    <img src={img4} alt="imagem" className={styles.card_img} />
                    <div className={styles.card_data}>
                        <span className={styles.card_description}>
                        HTML, CSS.
                        </span>
                        <h2 className={styles.card_title}>Dev Link</h2>
                        <div className={styles.card_buttons}>
                            <a href="https://dev-link-three.vercel.app/" target="blank" className={styles.card_button}>
                                Ver Projeto
                            </a>
                            <a href="https://github.com/WilliamRibeiR0/devLink" target="blank" className={styles.card_button}>
                                Ver Code
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className={styles.card_article}>
                    <img src={img5} alt="imagem" className={styles.card_img} />
                    <div className={styles.card_data}>
                        <span className={styles.card_description}>
                        HTML, CSS, JavaScript.
                        </span>
                        <h2 className={styles.card_title}>Jogo Da Velha</h2>
                        <div className={styles.card_buttons}>
                            <a href="https://williamribeir0.github.io/jogo_da_velha/" target="blank" className={styles.card_button}>
                                Ver Projeto
                            </a>
                            <a href="https://github.com/WilliamRibeiR0/jogo_da_velha" target="blank" className={styles.card_button}>
                                Ver Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.card_article}>
                    <img src={img6} alt="imagem" className={styles.card_img} />
                    <div className={styles.card_data}>
                        <span className={styles.card_description}>
                        HTML, CSS, JavaScript.
                        </span>
                        <h2 className={styles.card_title}>Game Snake</h2>
                        <div className={styles.card_buttons}>
                            <a href="https://snake-nu-beryl.vercel.app/" target="blank" className={styles.card_button}>
                                Ver Projeto
                            </a>
                            <a href="https://github.com/WilliamRibeiR0/snake-Game" target="blank" className={styles.card_button}>
                                Ver Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://github.com/WilliamRibeiR0?tab=repositories" target="blank">Ver mais</a>
        </div>
    );
}

export default Projetos;
