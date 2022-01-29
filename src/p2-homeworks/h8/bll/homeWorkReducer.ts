import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort':
            const newState = [...state].sort((p1, p2) => {
                    if (p1.name > p2.name) {
                        return 1
                    } else if (p1.name < p2.name) {
                        return -1
                    } else {
                        return 0
                    }
                }
            )
            return action.payload === 'up' ? newState : newState.reverse()
        case
        "check"
        :
            return state.filter(p => p.age >= action.payload)
        default:
            return state
    }
}

export type ActionType =
    { type: 'sort', payload: 'up' | 'down' } |
    { type: 'check', payload: number }