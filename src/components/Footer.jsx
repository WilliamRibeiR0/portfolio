import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className={styles.foooter} id="footer">
            <hr />
            <div className={styles.footer}>
                <div className={styles.name}>
                    <h3>William P. Ribeiro</h3>
                    <p>Desenvolvedor web</p>
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
                </div>
                <div className={styles.links}>
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li>
                            <a href="#inicio">Home</a>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.contato}>
                    <h3>Contato</h3>
                    <p>Vamos trabalhar juntos? Entre em contato!</p>
                    <a href="#">
                        <i>
                            <MdEmail />
                        </i>
                        Enviar mensagem
                    </a>
                </div>
            </div>
            <hr />
            <div>
                <span>© 2025 William Pimenta Ribeiro.</span>
            </div>
        </div>
    );
}

export default Footer;
