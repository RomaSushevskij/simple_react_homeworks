import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(''); // need to fix any
    const [error, setError] = useState<string>(''); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        const inputValue = e.currentTarget.value.trim();
        if (inputValue) {
            setName(inputValue)
            error && setError('');
        } else {
            name && setName('')
            setError('Name required')
        }
        // need to fix any
        // need to fix
    };

    const addUser = () => {
        addUserCallback(name);
        setName('')
        alert(`Hello ${name}!`)
        // need to fix
    };
    const onKeyPressSetName = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    };

    const totalUsers = users.length;// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressSetName={onKeyPressSetName}
        />
    )
}

export default GreetingContainer
