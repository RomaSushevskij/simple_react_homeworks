import React from 'react'
import Message from "./Message";
import style from './HW.module.css' ;


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, mollitia repellendus. Amet, ex incidunt itaque labore necessitatibus nobis saepe vero.',
    time: '22:00',
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
