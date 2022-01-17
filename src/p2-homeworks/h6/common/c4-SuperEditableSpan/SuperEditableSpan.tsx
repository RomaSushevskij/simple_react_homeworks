import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import style from './SuperEditableSpan.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {CSSTransition} from "react-transition-group";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {};

    const onEnterCallback = () => {
        setEditMode(false);

        onEnter && onEnter()
    };
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false);

        onBlur && onBlur(e)
    };
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    };

    const spanClassName = `${style.editSpan} ${className}`;

    return (
        <div className={style.editableSpanWrapper}>
            <CSSTransition in={editMode}
                           timeout={400}
                           classNames={style}
                           unmountOnExit
                           mountOnEnter>
                <div className={style.inputWrapper}>
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onDoubleClick={onDoubleClickCallBack}
                        error={restProps.error}
                        customStyle={style.inputStyle}

                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                </div>
            </CSSTransition>
            <CSSTransition in={!editMode}
                           timeout={500}
                           classNames={style}
                           unmountOnExit
                           mountOnEnter>
                <div className={style.spanWrapper}>
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}

                        {...restSpanProps}
                    >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        {children || restProps.value}
                        <FontAwesomeIcon className={style.editPen} icon={faPencilAlt}/>
                    </span>
                </div>
            </CSSTransition>
        </div>
    )
}

export default SuperEditableSpan
