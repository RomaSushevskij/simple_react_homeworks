import {changeTheme, ThemeInitialStateType, themeReducer} from "./themeReducer";


let startState: ThemeInitialStateType;
beforeEach(() => {
    startState = {
        themeName: 'some'
    }
})

test('after dispatch themeName value should be correct', () => {
    const endState1 = themeReducer(startState, changeTheme('dark'))
    const endState2 = themeReducer(endState1, changeTheme('red'))
    expect(endState1.themeName).toBe('dark')
    expect(endState2.themeName).toBe('red')
})