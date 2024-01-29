
.box1{
    background-color: aquamarine;
    display: grid;
    place-items: center;
    height: 100vh;
}

.box2{
    background-color: antiquewhite;
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

}

.box3{
    background-color: black;
    width: 450px;
    height:  250px;
    
}




.titleProjetos{
    display: grid;
    place-items: center;
    padding: 30px;
    width: 100%;
}

.link {
    border-bottom: 1px solid black;
    display: grid;
    place-items: center;
    width: 300px;
}
import styles from "./Projetos.module.css";
// import img1 from "../img/calculadora.png";
// import img2 from "../img/clima.png";
// import img3 from "../img/envento_dev.png";
// import img4 from "../img/link.png";

function Projetos() {
    return (
        <div className={styles.box1}>
            <div className={styles.box2}>
                <div className={styles.box3}>1</div>
                <div className={styles.box3}>2</div>
                <div className={styles.box3}>3</div>
                <div className={styles.box3}>4</div>
                <div className={styles.box3}>5</div>
                <div className={styles.box3}>6</div>
            </div>
            <div className={styles.titleProjetos}>
                <a
                    href="https://github.com/WilliamRibeiR0?tab=repositories"
                    target="blank"
                    className={styles.link}
                >
                    Ver mais Projetos
                </a>
            </div>
        </div>
    );
}

export default Projetos;