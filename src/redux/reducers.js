import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    console.log("action: ", action)
    switch(action.type) {
       
        case 'ADD_CAR':
            return [...state,action.value]
        case 'REMOVE_CAR':
            const newState = [ ...state ]
            console.log('this is the action' ,action.value)
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}

export default combineReducers({ user, cars })