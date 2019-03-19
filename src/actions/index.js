import axios from 'axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

// export const onAddClick = (Pnama, Pdesc, Pprice, Psrc) => {
    
//     return () => {
//         axios.post("http://localhost:1996/product",{
                
            
//         })
//     }
// }

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
    axios.get("http://localhost:1997/users",{
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

            setTimeout (() => {
                dispatch({
                    type: 'TIMEOUT'
                })
            }, 3000);
        }

        console.log(res.data)
    }).catch(err => {
        console.log("system error")
    })
    }
}

export const onRegisterUser = (user,mail,pass) => {
    return dispatch => {
        axios.get('http://localhost:1997/users', {
            params: {
                username: user
            }
        }).then(res => {
            if(res.data.length === 0){
                axios.post('http://localhost:1997/users', {
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
            } else {
                dispatch({
                    type: 'AUTH.ERROR',
                    payload: 'Username has been taken'
                })

                setTimeout (() => {
                    dispatch({
                        type: 'TIMEOUT'
                    })
                }, 3000);
            }
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
        axios.get('http://localhost:1997/users', {
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