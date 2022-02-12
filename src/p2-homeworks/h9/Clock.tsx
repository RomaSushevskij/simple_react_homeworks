import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.css'
import {CSSTransition} from "react-transition-group";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date());

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const stringTime = date.toLocaleTimeString()
    const stringDate = date.toLocaleDateString()

    return (
        <div className={style.dateBlockWrapper}>
            <div className={style.timeAndDate}>
                <div className={style.timeBlock}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>
                <CSSTransition in={show}
                               timeout={400}
                               classNames={style}
                               unmountOnExit
                               mountOnEnter>
                    <div className={style.dateBlock}>
                        {stringDate}
                    </div>
                </CSSTransition>
            </div>
            <div className={style.buttonsBlock}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
