import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    const setActiveClass = (filter: FilterType) => {
        if (props.filter === filter && filter === 'all') {
            return `${style.FilterTypeButtonAll} ${style.active}`
        } else if (props.filter === filter && filter === 'low') {
            return `${style.FilterTypeButtonLow} ${style.active}`
        } else if (props.filter === filter && filter === 'middle') {
            return `${style.FilterTypeButtonMiddle} ${style.active}`
        } else if (props.filter === filter && filter === 'high') {
            return `${style.FilterTypeButtonHigh} ${style.active}`
        } else {
            return style.FilterTypeButton
        }
    }

    const setAll = () => props.setFilter('all');// need to fix
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    return (
        <div>
            <div className={style.affairsBlock}>
                {mappedAffairs}
            </div>
            <div className={style.buttonBlock}>
                <button className={setActiveClass('all')} onClick={setAll}>All</button>
                <button className={setActiveClass('high')} onClick={setHigh}>High</button>
                <button className={setActiveClass('middle')} onClick={setMiddle}>Middle</button>
                <button className={setActiveClass('low')} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
