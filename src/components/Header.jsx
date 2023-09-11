import styles from "./Header.module.css";

function Header() {
    return (
        <div>
            <nav>
                <h1>Portifólio</h1>

                <ul className={styles.navList}>
                    <li>
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
