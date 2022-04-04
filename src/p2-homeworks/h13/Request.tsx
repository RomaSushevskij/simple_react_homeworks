import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from './HW13.module.css'
import React, {ChangeEvent, useState} from "react";
import {PostResponseType, requestAPI} from "./api/requestAPI";
import {Preloader} from "../h10/Preloader/Preloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

export const Request = () => {
    const [success, setSuccess] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [info, setInfo] = useState('')
    const [status, setStatus] = useState<null | number>(null)
    const [fetching, setFetching] = useState(false)
    const onClickButtonHandler = () => {
        setFetching(true)
        requestAPI.requestCreate(success)
            .then(({data, status}: { data: PostResponseType, status: number }) => {
                setFetching(false)
                if (status === 404) {
                    setErrorText(data?.error)
                    setStatus(status)
                } else {
                    setErrorText(data?.errorText)
                    setInfo(data?.info)
                    setStatus(status)
                }

            })
    }
    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }
    return (
        <div className={s.requestWrapper}>
            {fetching ? <Preloader size={'30px'} color={'#4E7FFE'}/> :
                <>
                    <div className={s.controlBlock}>
                        <SuperButton onClick={onClickButtonHandler}>
                            {'Request'}
                        </SuperButton>
                        <SuperCheckbox checked={success} onChange={onChangeChecked}>
                            {'Success'}
                        </SuperCheckbox>
                    </div>
                    {status && status >= 200 && status < 300 ?
                        <div className={`${s.messagesBlock} ${s.messagesBlockSuccess}`}>
                            <div className={`${s.wrapperIcon} ${s.wrapperIconSuccess}`}>
                                <FontAwesomeIcon icon={faCheck} className={s.icon}/>
                            </div>
                            <p style={{fontWeight: 'bold'}}>{errorText}</p>
                            <p>{info}</p>
                        </div> : status && status >= 300 ?
                            <div className={`${s.messagesBlock} ${s.messagesBlockError}`}>
                                <div className={`${s.wrapperIcon} ${s.wrapperIconError}`}>
                                    <FontAwesomeIcon icon={faTimes} className={s.icon}/>
                                </div>
                                <p style={{fontWeight: 'bold'}}>{errorText}</p>
                                <p>{info}</p>
                            </div> : null}
                </>}

        </div>
    )
}

