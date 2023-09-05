import styles from "./Projetos.module.css";

function Projetos() {
    return (
        <div className={styles.boxProjetos}>
            <h1>Projetos</h1>
            <div className={styles.boxCard}>
                <div className={styles.card}>
                    <img src="https://via.placeholder.com/400x200" alt="#" />

                    <h2>Calculadora</h2>

                    <p>
                        Todos os calculos são executados através da função
                        eval() do Javascript fazendo assim com que não seja
                        necessário desenvolver as funcionalidades de cada tipo
                        de calculo separadamente.
                    </p>

                    <a href="#">
                        <button className={styles.bottonCard}>
                            Visualizar
                        </button>
                    </a>

                    <p>
                        <strong>Tecnologias usadas:</strong> Html, css,
                        JavaScript.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src="https://via.placeholder.com/400x200" alt="#" />
                    <h2>Dev Link</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ab iste recusandae eaque, architecto, omnis mollitia perspiciatis repellendus 
                    </p>
                    <a href="https://williamribeir0.github.io/devLink/">
                        <button className={styles.bottonCard}>
                            Visualizar
                        </button>
                    </a>
                    <p>
                        <strong>Tecnologias usadas:</strong> Html, css.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src="https://via.placeholder.com/400x200" alt="#" />
                    <h2>Clima</h2>
                    <p>
                        Este projeto é o layout statico (os valores não estão
                        sendo consumido por uma api) de uma aplicação de
                        previsão do tempo, foi adicionado responsividade.
                    </p>
                    <a href="#">
                        <button className={styles.bottonCard}>
                            Visualizar
                        </button>
                    </a>
                    <p>
                        <strong>Tecnologias usadas:</strong> Html, css.
                    </p>
                </div>
            </div>

            <a
                href="https://github.com/WilliamRibeiR0?tab=repositories"
                target="blank"
                className={styles.link}
            >
                Ver mais Projetos
            </a>
        </div>
    );
}

export default Projetos;
