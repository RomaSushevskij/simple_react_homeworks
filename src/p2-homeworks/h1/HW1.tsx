import React from 'react'
import Message from "./Message";
import style from './HW.module.css' ;
import userLogo from '../../assets/userLogo.png'


const messageData = {
    avatar: userLogo,
    name: 'Some Name',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia repellendus. Amet, ex incidunt itaque labore necessitatibus nobis saepe vero.',
    time: new Date().toLocaleTimeString().slice(0, 5),
}

function HW1() {

    return (
        <div className={style.homeWork_1}>
            <div className={style.title}>homework 1</div>


            {/*should work (должно работать)*/}
            <div className={style.stand}>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>
        </div>
    );
}

export default HW1
