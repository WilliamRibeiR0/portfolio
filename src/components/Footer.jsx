import styles from "./Footer.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer (){
    return(
        <div className={styles.footer} id="footer">
            <div>
                <div>
                    <FaGithub />
                    <FaLinkedin />
                    <MdEmail />
                </div>
                <span>©2024 WILLIAM PIMENTA RIBEIRO.</span>
            </div>
        </div>
    )
}

export default Footer