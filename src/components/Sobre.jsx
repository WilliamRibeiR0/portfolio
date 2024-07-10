import styles from "./Sobre.module.css";
import img from "../img/william.jpg";

function Sobre() {
    return (
        <div className={styles.info} id="sobre">
            <div className={styles.boxInfo}>
                <img src={img} alt="imagem do desenvolvedor" />
                <div className={styles.boxinfo}>
                    <h2>Quem eu sou ?</h2>
                    <p>Estudante de Full-Stack</p>
                    <br />
                    <span>
                        Atualmente sou inspetor de qualidade e estou em
                        transição de carreira estudando para ser um
                        desenvolvedor web. Cursei analise e desenvolvimento de
                        sistemas por dois semestres, estou a procura de ter a
                        oportunidade de resolver problemas e me desafiar.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
