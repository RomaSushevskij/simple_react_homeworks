import React, {useState} from 'react'
import {PATH} from "./AllRoutes";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {CSSTransition} from "react-transition-group";

function Header() {
    const [selectMode, setSelectMode] = useState(false);

    return (
        <div tabIndex={0} onBlur={()=>setSelectMode(false)} className={style.level}>
            <SuperButton onClick={() => setSelectMode(!selectMode)}>Select level</SuperButton>
            <CSSTransition in={selectMode}
                           classNames={style}
                           timeout={600}
                           unmountOnExit
                           mountOnEnter>
                <ul>
                    <li><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR}>Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink></li>
                </ul>
            </CSSTransition>

        </div>
    )
}

export default Header
