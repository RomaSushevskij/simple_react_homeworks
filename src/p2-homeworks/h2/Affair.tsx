import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    const priorityStyle = style[props.affair.priority];
    const removingSymbol = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="3 -2 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    </svg>
    return (
        <div>
            <div className={style.affairBlock}>
                <div className={style.affairName}>
                    {props.affair.name}
                </div>
                <div className={`${style.affairPriority} ${priorityStyle}`}>
                    {props.affair.priority}
                </div>
                <button onClick={deleteCallback}>{removingSymbol}</button>
            </div>


        </div>
    )
}

export default Affair
