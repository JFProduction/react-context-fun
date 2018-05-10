import { CHANGE_NAME } from './actionTypes'
import { changeNameStore } from '../stores/ChangeNameStore';

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}

export const boundChangeName = name => {
    changeNameStore.dispatch(changeName(name))
}