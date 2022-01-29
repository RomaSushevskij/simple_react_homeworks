import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort':
            return [...state.sort((p1, p2) => action.payload === "up" ?
                p1.age - p2.age : action.payload === "down" ? p2.age - p1.age : 0)]
        case "check":
            return state.filter(p => p.age >= action.payload)
        default:
            return state
    }
}

export type ActionType =
    { type: 'sort', payload: 'up' } |
    { type: 'sort', payload: 'down' } |
    { type: 'check', payload: 18 }