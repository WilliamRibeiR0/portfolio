import React, { useState } from "react";
import styles from "./Header.module.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav>
                <h1>Portfólio</h1>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={styles.navList}>
                    <li>
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#habilidades">Habilidades</a>
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
