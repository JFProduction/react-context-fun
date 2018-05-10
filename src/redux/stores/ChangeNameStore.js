import { createStore } from 'redux'
import nameChanged from '../reducers/ChangeNameReducer'

export const changeNameStore = createStore(nameChanged)