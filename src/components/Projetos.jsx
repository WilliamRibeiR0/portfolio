import styles from "./Projetos.module.css";

function Projetos() {
    return (
        <div className={styles.boxProjetos} id="projetos">
            <h1>Projetos</h1>
            <div className={styles.boxCard}>
                <div className={styles.card}>
                    <h2>Calculadora</h2>
                    <p>
                        Todos os calculos são executados através da função
                        eval() do Javascript fazendo assim com que não seja
                        necessário desenvolver as funcionalidades de cada tipo
                        de calculo separadamente.
                    </p>

                    <div className={styles.buttonInfo}>
                        <a href="https://github.com/WilliamRibeiR0/calculadora" target="blank">
                            <button className={styles.bottonCard}>
                                Visualizar
                            </button>
                        </a>
                        <p>
                            <strong>Tecnologias usadas:</strong> Html, css,
                            JavaScript.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <h2>Dev Link</h2>

                    <p>
                        Projeto simples aonde o usuario ira se deparar com uma
                        pagina de liks para acessar, se concentra as principais redes usadas por mim, usei uma forma de link aonde o usuário é levado a outra pagina mantendo a pagina original aberta.
                    </p>
                    <div className={styles.buttonInfo}>
                        <a href="https://github.com/WilliamRibeiR0/devLink" target="blank">
                            <button className={styles.bottonCard}>
                                Visualizar
                            </button>
                        </a>
                        <p>
                            <strong>Tecnologias usadas:</strong> Html, css.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <h2>Clima</h2>

                    <p>
                        Este projeto é o layout statico (os valores não estão
                        sendo consumido por uma api) de uma aplicação de
                        previsão do tempo, foi adicionado responsividade.
                    </p>
                    <div className={styles.buttonInfo}>
                        <a href="https://github.com/WilliamRibeiR0/Clima" target="blank">
                            <button className={styles.bottonCard}>
                                Visualizar
                            </button>
                        </a>
                        <p>
                            <strong>Tecnologias usadas:</strong> Html, css.
                        </p>
                    </div>
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
