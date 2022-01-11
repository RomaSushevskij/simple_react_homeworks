import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import style from '../h1/HW.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([{_id: v1(), name: name}, ...users]) // need to fix
    };

    return (
        <div className={style.homeWork_3}>

            <div className={style.title}>
                homeworks 3
            </div>

            {/*should work (должно работать)*/}
            <div className={style.stand}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>

        </div>
    )
}

export default HW3
