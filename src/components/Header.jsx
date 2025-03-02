import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <a href="#inicio">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#footer">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
