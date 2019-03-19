import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                    <div className='container'>
                        <Link className="navbar-brand" to="/">SezzaStyle.</Link>

                        <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                            <ul className="navbar-nav ml-auto col-12 col-md-5">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Blog</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">Contact</Link>
                                </li> */}
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
                <section id="explore-head-section">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col text-center py-5">
                                <h1>Explore</h1>
                                <p><i class="icon-camera-retro icon-large"></i> icon-camera-retro</p>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas tempora magni vitae impedit
                                    architecto corrupti ad eum aliquam porro cumque harum, laboriosam ullam.
                                    Repudiandae unde debitis asperiores modi commodi?
                                </p><br></br>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas tempora magni vitae impedit
                                    architecto corrupti ad eum aliquam porro cumque harum, laboriosam ullam.
                                    Repudiandae unde debitis asperiores modi commodi?
                                </p><br></br>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas tempora magni vitae impedit
                                    architecto corrupti ad eum aliquam porro cumque harum, laboriosam ullam.
                                    Repudiandae unde debitis asperiores modi commodi?
                                </p><br></br>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas tempora magni vitae impedit
                                    architecto corrupti ad eum aliquam porro cumque harum, laboriosam ullam.
                                    Repudiandae unde debitis asperiores modi commodi?
                                </p><br></br>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas tempora magni vitae impedit
                                    architecto corrupti ad eum aliquam porro cumque harum, laboriosam ullam.
                                    Repudiandae unde debitis asperiores modi commodi?
                                </p><br></br>
                                <a href="#" className="btn btn-outline-secondary">Find out more</a>
                            </div>
                        </div>
                    </div> */}
                </section>
            </div>

        )
    }
}

export default Header
