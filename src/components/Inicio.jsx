import styles from "./Inicio.module.css";

function Inicio() {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <span>olá, meu nome é</span>
                <div className={styles.message}>
                    <h1>William Pimenta Ribeiro</h1>
                </div>
                <span>Desenvolvedor Front-end</span>
            </div>

            {/* <div className={styles.info}>
                <span>
                    Atualmente sou inspetor de qualidade e estou em transição de
                    carreira estudando para ser um desenvolvedor web. cursei
                    analise e desenvolvimento de sistemas por dois semestres,
                    pronto para aprender e melhorar minhas habilidades como
                    desenvolvedor front-end.
                </span>
            </div> */}
        </div>
    );
}

export default Inicio;
