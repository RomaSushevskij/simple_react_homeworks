import React from 'react'
import {PATH} from "./AllRoutes";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    return (
        <div className={style.level}>
            <SuperButton>Select level</SuperButton>
            <ul>
                <li><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR}>Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
