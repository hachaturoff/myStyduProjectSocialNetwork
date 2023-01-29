import style from "./Preloader.module.css";
import loaderImg from "../../../assets/images/ZKZg.gif";
import React from "react";

function Preloader() {
     return (
            <div>
                <img className={style.preloader} src={loaderImg} alt=""/>
            </div>
        )
}

export default Preloader