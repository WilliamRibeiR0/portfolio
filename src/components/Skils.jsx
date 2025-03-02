import styles from "./Skils.module.css";
import img from "../img/william.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgCalculator } from "react-icons/cg";
import { CgBrowse } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";

function Skils() {
    return (
        <div className={styles.skils}>
            <h2>Skils</h2>
            <div className={styles.full}>
                <div className={styles.sobre}>
                    <div>
                        <img
                            src={img}
                            alt="imagem dev"
                            className={styles.img_dev}
                        />
                    </div>
                    <h3>William Pimenta Ribeiro</h3>
                    <hr />
                    <span>
                        Atualmente sou inspetor de qualidade e estou em
                        transição de carreira estudando para ser um
                        desenvolvedor web. Cursei analise e desenvolvimento de
                        sistemas por dois semestres, estou a procura de ter a
                        oportunidade de resolver problemas e me desafiar.
                    </span>
                    <div className={styles.icon}>
                        <a
                            href="https://github.com/WilliamRibeiR0"
                            target="blank"
                        >
                            <i>
                                <FaGithub />
                            </i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/william-pimenta-ribeiro/"
                            target="blank"
                        >
                            <i>
                                <FaLinkedin />
                            </i>
                        </a>
                    </div>
                    <div className={styles.box_skils}>
                        <i>
                            <FaHtml5 />
                        </i>
                        <i>
                            <FaCss3Alt />
                        </i>
                        <i>
                            <RiJavascriptFill />
                        </i>
                        <i>
                            <FaReact />
                        </i>
                        <i>
                            <FaNodeJs />
                        </i>
                        <i>
                            <TbSql />
                        </i>
                        <i>
                            <FaGitAlt />
                        </i>
                        <i>
                            <FaPython />
                        </i>
                        <i>
                            <TbBrandDjango />
                        </i>
                    </div>
                </div>
                <div className={styles.box_h_e}>
                    <div className={styles.habilidades}>
                        <h3>
                            <i>
                                <CgCalculator />
                            </i>
                            Estudo
                        </h3>
                        <div className={styles.scrollContainer}>
                            <div className={styles.timeline}>
                                <div className={styles.timeline_item}>
                                    <div className={styles.content}>
                                        <h3>
                                            Análise e Desenvolvimento de
                                            Sistemas
                                        </h3>
                                        <span className={styles.tempo}>
                                            2025 - Presente
                                        </span>
                                        <p>UniAnchieta</p>
                                    </div>
                                </div>
                                <div className={styles.timeline_item}>
                                    <div className={styles.content}>
                                        <h3>Fisk</h3>
                                        <span className={styles.tempo}>
                                            2025 - Presente
                                        </span>
                                        <p>Estudo de Inglês completo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experiencias}>
                        <h3>
                            <i>
                                <CgBrowse />
                            </i>
                            Experiências
                        </h3>
                        <div className={styles.scrollContainer}>
                            <div className={styles.timeline}>
                                <div className={styles.timeline_item}>
                                    <div className={styles.content}>
                                        <h3>
                                            Desenvolvedor Front-end Freelancer
                                        </h3>
                                        <span className={styles.tempo}>
                                            2024
                                        </span>
                                        <p>
                                            Desenvolvimento de websites
                                            responsivos e landing pages
                                            utilizando HTML, CSS, JavaScript.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.timeline_item}>
                                    <div className={styles.content}>
                                        <h3>Projetos Pessoais</h3>
                                        <span className={styles.tempo}>
                                            2024 - Presente
                                        </span>
                                        <p>
                                            Desenvolvimento de projetos próprios
                                            para aprimoramento de habilidades e
                                            construção de portfólio.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.timeline_item}>
                                    <div className={styles.content}>
                                        <h3>Técnico instalador</h3>
                                        <span className={styles.tempo}>
                                            2024 - 2024
                                        </span>
                                        <p>
                                            Atuava na instalação e manutenção de rede fibra.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skils;
