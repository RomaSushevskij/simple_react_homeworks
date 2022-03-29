import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {AppActionsType, AppStateType} from "../h10/bll/store";
import {changeTheme, ThemeNameType} from "./bll/themeReducer";
import style from "../h1/HW.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const themeName = useSelector((state: AppStateType) => state.theme.themeName)
    const dispatch = useDispatch<Dispatch<AppActionsType>>(),
        onChangeCallback = (themeName: ThemeNameType) => {
            dispatch(changeTheme(themeName))
        }

    return (
        <div className={`${style.homeWork_12} ${s[themeName]}`}>
            <div className={`${style.title} ${s[themeName + '_text']}`}>homework 12</div>
            <div className={`${style.stand} ${s.stand} ${s[themeName + '_stand']}`}>
                <SuperRadio options={themes}
                            value={themeName}
                            onChangeOption={onChangeCallback}/>

            </div>
        </div>
    );
}

// <div className={style.homeWork_12}>
//     <div className={s[themeName]}>
//                 <span className={s[themeName + '-text']}>
//                 homeworks 12
//             </span>
//         <SuperRadio options={themes}
//                     value={themeName}
//                     onChangeOption={onChangeCallback}/>
//
//     </div>
// </div>

export default HW12;
