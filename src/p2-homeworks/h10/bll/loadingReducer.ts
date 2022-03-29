enum ACTION_TYPES {
    IS_LOADING = 'HOMEWORKS/dz_10/IS_LOADING'
}

const loadingInitState = {
    isLoading: false
}
export type LoadingInitStateType = typeof loadingInitState

export const loadingReducer = (state: LoadingInitStateType = loadingInitState, action: LoadingActionType): LoadingInitStateType => { // fix any
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

export type LoadingActionType =
    ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({type: ACTION_TYPES.IS_LOADING, payload: {isLoading}} as const)