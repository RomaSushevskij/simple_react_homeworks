import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import style from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map(o => <option value={o} key={o}>{o}</option>) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <div className={style.selectWrapper}>
            <div className={style.selectValueWrapper}>
                <select className={style.selectValue} value={value} onChange={onChangeCallback} {...restProps}>
                    {mappedOptions}
                </select>
            </div>
        </div>
    )
}

export default SuperSelect
