import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {

    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    const arrID = [1, 3, 4, 5, 2, 0].filter((id, i) => newState[i]._id === id)

    expect(newState.length).toBe(arrID.length)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    const arrID = [1, 3, 4, 5, 2, 0].reverse().filter((id, i) => newState[i]._id === id)

    expect(newState.length).toBe(arrID.length)
    expect(newState[5].name).toBe('Александр')
    expect(newState[0].name).toBe('Кот')
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.length).toBe(4)
    expect(newState.find(p => p.age <= 18)).toBe(undefined)

})
