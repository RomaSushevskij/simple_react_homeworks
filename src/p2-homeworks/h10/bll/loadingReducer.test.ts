import {initStateType, loadingAC, loadingReducer} from "./loadingReducer";

let startState:initStateType;
beforeEach(()=>{
    startState = {
        isLoading: false
    }
})

test('after dispatch isLoadings value should be correct', ()=>{
    const endState1 = loadingReducer(startState, loadingAC(true))
    const endState2 = loadingReducer(endState1, loadingAC(false))
    expect(endState1.isLoading).toBeTruthy()
    expect(endState2.isLoading).toBeFalsy()
})