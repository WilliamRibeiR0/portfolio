import styles from "./Sobre.module.css";
import img from "../img/william.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Sobre() {
    return (
        <div className={styles.info} id="sobre">
            <div className={styles.boxInfo}>
                <img src={img} alt="imagem do desenvolvedor" />
                <div className={styles.boxinfo}>
                    <h2>Quem sou eu?</h2>
                    <p>Estudante de Full-Stack</p>
                    <br />
                    <span>
                        Atualmente sou inspetor de qualidade e estou em
                        transição de carreira estudando para ser um
                        desenvolvedor web. Cursei analise e desenvolvimento de
                        sistemas por dois semestres, estou a procura de ter a
                        oportunidade de resolver problemas e me desafiar.
                    </span>
                    <div className={styles.button}>
                        <a
                            href="https://github.com/WilliamRibeiR0"
                            target="blank"
                            className={styles.box_button}
                        >
                            <i>
                                <FaGithub />
                            </i>
                            GitHub
                        </a>

                        <a
                            href="https://github.com/WilliamRibeiR0"
                            target="blank"
                            className={styles.box_button}
                        >
                            <i>
                                <FaLinkedin />
                            </i>
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
