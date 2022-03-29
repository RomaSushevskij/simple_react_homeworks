import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from "../h1/HW.module.css";
import s from "./HW10.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {Dispatch} from "redux";
import {LoadingActionType, loadingAC} from "./bll/loadingReducer";
import {Preloader} from "./Preloader/Preloader";


function HW10() {
    const isLoading = useSelector((state: AppStateType) => state.loading.isLoading)
    const dispatch = useDispatch<Dispatch<LoadingActionType>>()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
        console.log('loading...')
    };

    return (
        <div className={style.homeWork_10}>
            <div className={style.title}>homeworks 10</div>
            <div className={`${style.stand} ${s.stand}`}>
                {/*should work (должно работать)*/}
                {isLoading
                    ? <Preloader size={'20px'} color={'#4E7FFE'}/> : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }</div>
        </div>
    )
}

export default HW10
