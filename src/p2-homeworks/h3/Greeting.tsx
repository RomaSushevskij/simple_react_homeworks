import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressSetName: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressSetName, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputError = `${s.usersInput} ${s.error}`; // need to fix with (?:)
    const addSymbol = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 1267.000000 1280.000000"
                           preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        >
            <path d="M6150 12794 c-195 -19 -398 -76 -550 -155 -338 -176 -592 -520 -691
-938 -54 -226 -52 -157 -56 -2058 l-4 -1763 -1712 0 c-1854 0 -1839 0 -2071
-54 -403 -96 -739 -346 -906 -676 -114 -227 -170 -514 -157 -817 17 -398 156
-724 421 -989 200 -199 415 -319 695 -385 204 -49 183 -49 2013 -49 l1717 0 4
-1762 c4 -1902 2 -1833 56 -2059 100 -421 345 -751 688 -927 124 -64 249 -105
402 -134 168 -32 494 -32 663 0 300 56 514 167 713 366 234 236 365 511 421
886 16 105 18 270 21 1873 l4 1757 1717 0 c1888 0 1849 -1 2091 61 400 103
715 350 886 698 151 305 196 741 115 1126 -83 402 -328 720 -697 907 -120 62
-190 87 -332 123 -218 55 -211 55 -2068 55 l-1712 0 -4 1763 c-3 1564 -5 1774
-20 1869 -59 391 -203 678 -463 928 -184 177 -393 280 -669 331 -108 20 -406
33 -515 23z"/>
        </g>
    </svg>
    return (
        <div className={s.inputWrapper}>

            <div className={s.inputAndButton}>
                <input value={name} onBlur={setNameCallback} onChange={setNameCallback} onKeyPress={onKeyPressSetName}
                       className={error ? inputError : s.usersInput}/>
                <button className={s.addUserButton} onClick={addUser}
                        disabled={!!(error && !name)}>{addSymbol}</button>
                <div className={s.borderTotalUsers}>
                    <div className={s.totalUsers}>
                        <h3>{totalUsers}</h3>
                        <p>users</p>
                    </div>
                </div>
            </div>
            {error && <div className={s.errorBlockMessage}>{error}</div>}
        </div>
    )
};

export default Greeting
