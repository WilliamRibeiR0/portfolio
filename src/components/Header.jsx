import styles from "./Header.module.css";

function Header() {
    return (
        <div>
            <nav>
                <h1>Portifólio</h1>

                <ul className={styles.navList}>
                    <li id="">
                        <a href="#">Inicio</a>
                    </li>
                    <li id="">
                        <a href="#">Sobre</a>
                    </li>
                    <li id="">
                        <a href="#">Projetos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
