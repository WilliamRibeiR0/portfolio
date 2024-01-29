import style from "./Habilidade.module.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";


function Habilidades (){
    return(
        <div className={style.mainSkill} id="habilidades">
            <div className={style.boxSkill}>
                <h2>Habilidades</h2>
                <div className={style.skill}>
                <FaHtml5 />
                <FaCss3Alt />
                <RiJavascriptFill />
                <FaReact />
                <FaNodeJs />
                <TbSql />
                <FaGitAlt />
                </div>
            </div>
        </div>
    )
}

export default Habilidades