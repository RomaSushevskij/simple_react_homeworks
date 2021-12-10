import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({avatar, name, message, time, ...props} : MessagePropsType) {
    return (
        <div className={style.messageWrapper}>
            <div className={style.avatar}>
                <img src={avatar}/>
            </div>
            <div className={style.messageBlock}>
                <div className={style.name}>
                    {name}
                </div>
                <div className={style.message}>
                    {message}
                </div>
                <div className={style.time}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default Message
