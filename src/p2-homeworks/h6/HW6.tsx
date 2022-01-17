import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import style from "../h1/HW.module.css";
import styles from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css';



function HW6() {
    const [value, setValue] = useState<string>('');

    const save = () => {
        saveState<string>('editable-span-value', value)
    };
    const restore = () => {
        const newValue = restoreState('editable-span-value', 'enter text...');
        setValue(newValue)
    };

    return (
        <div className={style.homeWork_6}>
            <div className={style.title}>homeworks 6</div>
            <div className={style.stand}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
                <div className={styles.buttonsBlock}>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default HW6
