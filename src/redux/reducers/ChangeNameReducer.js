import { CHANGE_NAME } from '../actions/actionTypes'

const initialState = {
    name: 'jimmyfargo redux'
}

export default function nameChanged(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.payload }
        default:
            return state
    }
}