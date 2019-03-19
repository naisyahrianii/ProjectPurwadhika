import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {onLoginclick} from '../actions'
import {timeout} from '../actions'

export class Login extends Component {
    onSubmitClick = () => {
        const user = this.username.value
        const pass = this.password.value
        this.props.onLoginclick(user, pass)
        // console.log('username ' + user)
        // console.log('password ' + pass)
      }
    
      onErrorLogin = () => {
        setTimeout((this.props.timeout),3000);
        if(this.props.user.error !== ''){
            return (
                <div className="alert alert-danger mt-4">
                    {this.props.user.error}
                </div>
            )
        } else {
            return null
        }
    }
    
    render() {
      if(this.props.user !== ''){
        return (
          <div>
            <div className="mt-5 row">
              <div className="col-sm-3 mx-auto card">
                <div className="card-body">
                  <div className="border-bottom border-secondary card-title">
                    <h1>Login</h1>
                  </div>
                  <div className="card-title mt-1">
                    <h4>Username</h4>
                  </div>
                  <div className="input-group">
                    <input ref={input => { this.username = input }} className='form-control'></input>
                  </div>
                  {/* <div className="card-title mt-1">
                    <h4>Email</h4>
                  </div>
                  <div className="input-group">
                    <input ref={input => {this.email = input}} className='form-control'></input>
                  </div> */}
                  <div className="card-title mt-1">
                    <h4>Password</h4>
                  </div>
                  <form className="input-group">
                    <input ref={input => { this.password = input }} className="form-control" type="password" />
                  </form>
                  <button className="btn btn-success btn-block mt-5"
                    onClick={this.onSubmitClick}><Link to="/">Login</Link></button>
  
                  <p className="lead">Don't have account ? <Link to="/register">Sign Up!</Link></p>
                </div>
              </div>
            </div>
          </div>
        )
      }
      else {
        return <Redirect to="/"/>
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {user: state.auth}
  }
  
  export default connect(mapStateToProps, { onLoginclick, timeout })(Login)
  
