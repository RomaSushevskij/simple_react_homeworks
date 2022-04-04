import React from "react";
import {Request} from "./Request";
import style from "../h1/HW.module.css";
import s from "./HW13.module.css";


function HW13() {


    return (
        <div className={style.homeWork_13}>
            <div className={style.title}>homework 13</div>
            <div className={`${style.stand} ${s.stand}`}>
                <Request />
            </div>
        </div>
    );
}


export default HW13;
