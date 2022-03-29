enum ACTIONS_TYPES {
    CHANGE_THEME = 'HOMEWORKS/dz_12/CHANGE_THEME'
}

export type ThemeNameType = 'dark' | 'red' | 'some'

const initState = {
    themeName: 'some' as ThemeNameType
};
export type ThemeInitialStateType = typeof initState

export const themeReducer = (state: ThemeInitialStateType = initState, action: ThemeActionType): ThemeInitialStateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPES.CHANGE_THEME:
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
};
export type ThemeActionType =
    ReturnType<typeof changeTheme>

export const changeTheme = (themeName: ThemeNameType) => ({type: ACTIONS_TYPES.CHANGE_THEME, payload: {themeName}});