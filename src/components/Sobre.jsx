import styles from "./Sobre.module.css";
import img from "../img/william.jpg";

function Sobre() {
    return (
        <div className={styles.info} id="sobre">
            <img src={img} alt="imagem do desenvolvedor" />

            <span>
                Atualmente sou inspetor de qualidade e estou em transição de
                carreira estudando para ser um desenvolvedor web. cursei analise
                e desenvolvimento de sistemas por dois semestres, pronto para
                aprender e melhorar minhas habilidades como desenvolvedor
                front-end.
            </span>
        </div>
    );
}

export default Sobre;
