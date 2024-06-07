import styles from "./Projetos.module.css";
import img1 from "../img/calculadora.png";
import img2 from "../img/clima.png";
import img3 from "../img/envento_dev.png";
import img4 from "../img/link.png";
import img5 from "../img/jogodavelha.png"
import img6 from "../img/snakeGame.png";

function Projetos() {
    return (
        <div className={styles.box1} id="projetos">
            <h2>Projetos</h2>
            <div className={styles.box2}>
                <div >
                    <div className={styles.box3}>
                        <p>calculadora</p>
                        <a
                            href="https://williamribeir0.github.io/calculadora/"
                            target="blank"
                            className={styles.box4}
                        >
                            <img src={img1} alt="" />
                        </a>
                    </div>
                    
                    <div>
                    <p>clima</p>
                        <a
                            href="https://williamribeir0.github.io/Clima/"
                            target="blank"
                            className={styles.box4}
                        >
                            <img src={img2} alt="" />
                        </a>
                    </div>
                </div>


                <div >
                    <div className={styles.box3}>
                    <p>landing_pag</p>
                        <a
                            href="https://landing-pag-koea.vercel.app/"
                            target="blank"
                            className={styles.box4}
                        >
                            <img src={img3} alt="" />
                        </a>
                    </div>
                    <div>
                        <p>Dev link</p>
                        <a
                            href="https://dev-link-three.vercel.app/"
                            target="blank"
                            className={styles.box4}
                        >
                            <img src={img4} alt="" />
                        </a>
                    </div>
                </div>

                <div>
                    <div className={styles.box3}>
                    <p>Jogo da Velha</p>
                        <a
                            href="https://williamribeir0.github.io/jogo_da_velha/"
                            target="blank"
                            className={styles.box4}
                        >
                            <img src={img5} alt="" />
                        </a>
                    </div>
                    <div>
                    <p>Snake Game</p>
                        <a
                            href="https://snake-nu-beryl.vercel.app/"
                            target="blank"
                            className={styles.box4}
                        >
                            <img src={img6} alt="" />
                        </a>
                    </div>
                </div>


            </div>
            <div className={styles.titleProjetos}>
                <a
                    href="https://github.com/WilliamRibeiR0?tab=repositories"
                    target="blank"
                    className={styles.link}
                >
                    Ver mais Projetos
                </a>
            </div>
        </div>
    );
}

export default Projetos;
