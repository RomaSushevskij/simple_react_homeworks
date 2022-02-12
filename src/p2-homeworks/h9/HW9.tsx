import React from 'react'
import Clock from './Clock'
import style from "../h1/HW.module.css";

function HW9() {
    return (
        <div className={style.homeWork_3}>
            <div className={style.title}>
                homeworks 9
            </div>
            <div className={style.stand}>
                <Clock/>
            </div>

        </div>
    )
}

export default HW9
