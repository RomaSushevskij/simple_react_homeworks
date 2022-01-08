import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Routes, Route, Navigate} from "react-router-dom";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
};

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>

    );
}

export default AllRoutes
