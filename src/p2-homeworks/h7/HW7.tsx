import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import style from "../h1/HW.module.css";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (

        <div className={style.homeWork_7}>
            <div className={style.title}>homeworks 7</div>
            <div className={style.stand}>
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>
        </div>
    )
}

export default HW7
