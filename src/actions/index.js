import axios from '../config/axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

export const onLogout = () => {
    return{
        type: "LOGOUT"
    }
}

export const timeout = () => {
    return{
        type: "TIMEOUT"
    }
}

export const onLoginclick = (user, pass) => {
    return (dispatch) => {
    axios.post('/customers/login',{
        params: {
            username: user,
            password: pass
        }
    }).then(res => {
        if(res.data.length > 0){
            
            const {id, username} = res.data[0]
            dispatch({
                type: "LOGIN.SUCCESS",
                payload: {id, username}
            })

            cookie.set('masihLogin', username )

        } else {
            dispatch({
                type: "AUTH.ERROR",
                payload: "Username and password don't match"
            })

            // setTimeout (() => {
            //     dispatch({
            //         type: 'TIMEOUT'
            //     })
            // }, 3000);
        }

        console.log(res.data)
    }).catch(err => {
        console.log("system error")
    })
    }
}

export const onRegisterUser = (name,user,mail,pass) => {
        return dispatch => {
            axios.post('/customers', {
                name: name,
                username: user,
                email: mail,
                password: pass
            }).then(res => {
                console.log("registrasi berhasil")
                dispatch({
                    type: "AUTH.SUCCESS",
                    payload: "Register berhasil"
                })
            })   
        }
    }   



export const onLogoutUser = () => {
    cookie.remove('masihLogin')
     return {
         type: 'LOGOUT_USER'
     }
}

export const keepLogin = (user) => {
    return dispatch => {
        axios.post('/customers/login', {
            params: {
                username: user
            }
        })
            .then(res => {
                if(res.data.length > 0){
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: {username: user}
                    })
                }
            })
    }
}