import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import cookies from 'universal-cookie'

import {keepLogin} from '../actions'

import Header from './Header'
import Login from './Login'
import Register from './Register'

const cookie = new cookies()

export class App extends Component {
    componentDidMount(){
        // akan di jalankan sekali ketika pertama kali component di render

        // mengambil value yang disimpan pada file cookie masihLogin
        var userCookie = cookie.get('masihLogin')
        // jika didapatkan username di file cookie, akan memanggil function keepLogin
        if(userCookie !== undefined){
            //console.log("cookie ada")
            // function keepLogin akan me-loginkan ulang username yg tersimpan pada file cookie
            this.props.keepLogin(userCookie)
        }

    }

  render() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/Login' component={Login}/>
                <Route path='/Register' component={Register}/>
            </div>
        </BrowserRouter>
        
        
    )
  }
}

export default connect(null, {keepLogin})(App)