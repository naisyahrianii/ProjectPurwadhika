import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { onLoginclick } from '../actions';

import { timeout } from '../actions'

import outer1 from "./Assets/outer1.jpg"
import ootd from "../components/Assets/ootd.jpg"

export class Login extends Component {
    onSubmitClick = () => {
        const user = this.username.value
        const pass = this.password.value
        this.props.onLoginclick(user, pass)
        // console.log('username ' + user)
        // console.log('password ' + pass)
    }

    onErrorLogin = () => {
        setTimeout((this.props.timeout), 3000);
        if (this.props.user.error !== '') {
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
        if (this.props.user !== '') {
            return (
                <div class="container">
                    <div class="row">
                        {/* <!-- div image 6 bagian --> */}
                        <div class="col-md-3">
                            <div className="card mb-4">
                                <img height="310" className="card-img-top" src={ootd} alt="Card image cap" />
                            </div>
                            <div className="card-body center">
                                <h5 className="card-title font-weight-bold">Plisket Skirt</h5>
                                <p className="card-text">Rp. 289.000</p>
                                {/* <a className="btn btn-primary btn-md btn-rounded">Add to cart</a> */}
                            </div>
                            {/* <img src="img/explore-section1.jpg" alt="" class="img-fluid mb-3 rounded-circle" /> */}
                        </div>
                        {/* <!-- bagian teks --> */}
                        <div class="col-md-3">
                            <div className="card mb-4">
                                <img height="310" className="card-img-top" src={ootd} alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Plisket Skirt</h4>
                                <p className="card-text">Rp. 289.000</p>
                                {/* <a className="btn btn-elegant btn-md btn-rounded">Button</a> */}
                            </div>
                        </div>
                        {/* <br></br> */}
                        <div class="col-md-3">
                            <div className="card mb-4">
                                <img height="310" className="card-img-top" src={ootd} alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">Plisket Skirt</h4>
                                <p className="card-text">Rp. 289.000</p>
                                {/* <a className="btn btn-primary btn-md btn-rounded">Button</a> */}
                            </div>
                            {/* <img src="img/explore-section1.jpg" alt="" class="img-fluid mb-3 rounded-circle" /> */}
                        </div>
                        {/* <!-- bagian teks --> */}
                        <div class="col-md-3">
                            <div class="active-cyan-4 mb-4">
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                            
                            <div className="navbar-collapse" id="navbarNav2">
                                <div class="sidebar-widget-heading">
                                    <h4>Product Categories</h4>
                                </div>
                                <ul class="navbar-nav">
                                    <li class="nav-item ">
                                        <Link className="nav-link" to="/">Tops</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Product">Bottom</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Product">Outwear</Link>
                                    </li>
                                </ul>
                            </div>
                            

                        </div>

                    </div>
                </div>
            )
        }
        else {
            return <Redirect to="/" />
        }
    }
}

const mapStateToProps = (state) => {
    return { user: state.auth }
}

export default connect(mapStateToProps, { onLoginclick, timeout })(Login)
