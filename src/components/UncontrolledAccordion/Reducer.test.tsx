import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('collapsed should be true', () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)
})

test('expect toThrowError', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    expect(() => {
        reducer(state, {type: "FAKE"})
    }).toThrowError()
})