enum ACTION_TYPES {
    IS_LOADING='HOMEWORKS/dz_10/IS_LOADING'
}

const initState = {
    isLoading: false
}
export type initStateType = typeof initState

export const loadingReducer = (state: initStateType = initState, action: GeneralActionType): initStateType => { // fix any
    switch (action.type) {
        case ACTION_TYPES.IS_LOADING: {
            return {
                ...state, ...action.payload
            }
        }
        default:
            return state
    }
}

export type GeneralActionType =
    ReturnType<typeof loadingAC>

export const loadingAC = (isLoading:boolean) => ({type:ACTION_TYPES.IS_LOADING, payload:{isLoading}} as const)