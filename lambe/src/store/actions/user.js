import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logou = () => {
    return {
        type: USER_LOGGED_OUT
    }
}