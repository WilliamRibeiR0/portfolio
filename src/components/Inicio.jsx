import styles from "./Inicio.module.css";

function Inicio() {
    return (
        <div className={styles.container} id="inicio">
            <div className={styles.name}>
                <span>Olá, meu nome é</span>
                <div className={styles.message}>
                    <h1>William Pimenta Ribeiro</h1>
                </div>
                <span>Desenvolvedor Full-Stack</span>
                <div className={styles.cv}>
                    <a
                        href="https://cv-rouge-ten.vercel.app/William%20pimenta%20ribeiro-3.pdf"
                        target="blank"
                    >
                        Download do CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
