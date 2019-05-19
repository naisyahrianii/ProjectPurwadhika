import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {onLogout} from '../actions'

class Header extends Component {
    constructor(props) {
        super(props);

         this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

       toggle() {
        this.setState(({
            isOpen: !this.state.isOpen
        }));
      }

      onLogoutUser = () => {
        this.props.onLogout()
      }

    render() {
        const {user} = this.props

        if(user.username === ''){
            return (
                <div>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                        <div className='container'>
                            <Link className="navbar-brand" to="/Home">SezzaStyle.</Link>
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav2">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                                <ul className="navbar-nav ml-auto col-12 col-md-5">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Product">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">StyleGuide</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Register">Register</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <i><Link className="icon-shopping-cart" to="/"></Link></i>   
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        } else {
            return (
                <div>
                <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/Home">SezzaStyle.</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                                <ul className="navbar-nav ml-auto col-12 col-md-5">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Product">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">StyleGuide</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" to="/">My Account</Link>
                                        <div className="dropdown-menu">
                                            <Link to="/ManageProduct" className="dropdown-item">Manage Product</Link>
                                            <Link to="/Cart" className="dropdown-item">Cart</Link>
                                            <button onClick={this.onLogoutUser} className="dropdown-item"><Link to="/Home">Logout</Link></button>
                                        </div>
                                    </li>
                                     */}
                                    <li className="nav-item dropdown">
                                    <Link to="/asd" className="nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">My Account</Link>
                                    <div className="dropdown-menu">
                                        <Link to="/ManageProduct" className="dropdown-item">Manage Product</Link>
                                        <Link to="/Cart" className="dropdown-item">Cart</Link>
                                        <button onClick={this.onLogoutUser} className="dropdown-item"><Link to="/Home">Logout</Link></button>
                                    </div>
                                </li>

                                    {/* <li className="nav-item">
                                        <Link onClick={this.onLogoutUser} className="dropdown-item" className="nav-link" to="/">Logout</Link>
                                    </li> */}
                                    {/* <button onClick={this.onLogoutUser} className="dropdown-item"><Link to="/Home">Logout</Link></button> */}
                                </ul>
                            </div>
                        {/* <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                            <ul className="navbar-nav ml-auto col-12 col-md-5">
                                <li className="nav-item mt-2">
                                    <Link className="nav-link" to="/">All Product</Link>
                                </li>
                                <li className="nav-item dropdown mt-2">
                                    <Link to="/asd" className="nav-link dropdown-toggle" data-toggle="dropdown">Hallo {user.username}</Link>
                                    <div className="dropdown-menu">
                                        <Link to="/ManageProduct" className="dropdown-item">Manage Product</Link>
                                        <Link to="/Cart" className="dropdown-item">Cart</Link>
                                        <button onClick={this.onLogoutUser} className="dropdown-item"><Link to="/Home">Logout</Link></button>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
            </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {user: state.auth}
}

export default connect(mapStateToProps, {onLogout})(Header)
