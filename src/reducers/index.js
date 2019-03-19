import {combineReducers} from 'redux'

const init = {
    id: '',
    username: '',
    error: '',
    success: ''
}

const AuthReducer = (state = init, action) => {
    switch (action.type) {
        case "LOGIN.SUCCESS":
            return {...state, id: action.payload.id, username: action.payload.username}

        case "AUTH.ERROR":
            return {...state, error: action.payload, success: ''}

        case "AUTH.SUCCESS":
        return {...state, error:'', success: action.payload}

        case "LOGOUT":
        return {...state = init}

        case "TIMEOUT":
        return {...state, error:'', success:''}

        case "LOGOUT_USER":
        return {...state, ...init}
        
        default:
            return state;
    }
}

export default combineReducers (
    {
        auth: AuthReducer
    }
)