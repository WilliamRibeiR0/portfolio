import styles from "./Sobre.module.css";
import img from "../img/william.jpg";

function Sobre() {
    return (
        <div className={styles.info} id="sobre">
            <div className={styles.boxInfo}>
                <img src={img} alt="imagem do desenvolvedor" />
                <div className={styles.boxinfo}>
                    <h2>Quem eu sou ?</h2>
                    <p>Estudante de Front-end</p>
                    <br />
                    <span>
                        Atualmente sou inspetor de qualidade e estou em
                        transição de carreira estudando para ser um
                        desenvolvedor web. cursei analise e desenvolvimento de
                        sistemas por dois semestres, pronto para aprender e
                        melhorar minhas habilidades como desenvolvedor
                        front-end.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
