import {LoadingActionType, loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {ThemeActionType, themeReducer} from "../../h12/bll/themeReducer";

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme:themeReducer

})

const store = createStore(rootReducer)
export type AppActionsType =
    LoadingActionType |
    ThemeActionType

export default store

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
