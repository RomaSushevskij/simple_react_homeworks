import React from 'react'
import style from './Error404.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../AllRoutes";
import logo from '../logo/logo.webp'

function Error404() {
    return (
        <div className={style.notfound}>
            <div className={style.logo}>
                <div className={style.logoImg}>
                    <img src={logo} alt=""/>
                </div>
            </div>
            <div className={style.notfound_404}></div>
            <h1>404</h1>
            <h2>Oops! Page Not Be Found</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily
                unavailable</p>
            <NavLink to={PATH.PRE_JUNIOR}>Back to Pre-Junior Page</NavLink>

        </div>
    )
}

export default Error404
