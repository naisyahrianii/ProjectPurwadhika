import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { onLoginclick } from '../actions';

import { timeout } from '../actions'

import blog1 from "../components/Assets/blog1.jpg"
import blog2 from "../components/Assets/blog2.jpg"

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
        <div class="container">
          <div class="row">
            {/* <!-- div image 6 bagian --> */}
            <div class="col-md-6">
              <div className="card mb-2">
                <img className="card-img-top" src={blog1} alt="Card image cap" />
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-md btn-rounded">Button</a>
              </div>
              {/* <img src="img/explore-section1.jpg" alt="" class="img-fluid mb-3 rounded-circle" /> */}
            </div>
            {/* <!-- bagian teks --> */}
            <div class="col-md-6">
              <div className="card mb-2">
                <img className="card-img-top" src={blog2} alt="Card image cap" />
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-md btn-rounded">Button</a>
              </div>
            </div>
            <br></br>
            <div class="col-md-6">
              <div className="card mb-2">
                <img className="card-img-top" src={blog2} alt="Card image cap" />
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-md btn-rounded">Button</a>
              </div>
              {/* <img src="img/explore-section1.jpg" alt="" class="img-fluid mb-3 rounded-circle" /> */}
            </div>
            {/* <!-- bagian teks --> */}
            <div class="col-md-6">
              <div className="card mb-2">
                <img className="card-img-top" src={blog1} alt="Card image cap" />
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-md btn-rounded">Button</a>
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
