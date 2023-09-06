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
        </div>
    );
}

export default Inicio;
