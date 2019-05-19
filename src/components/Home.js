// Home Section
import React, { Component } from 'react'
//import { Link, Redirect } from 'react-router-dom'

import image1 from "../components/Assets/slider1.jpg"
import image2 from "../components/Assets/slider2.jpg"
import image3 from "../components/Assets/slider3.jpg"
import blog1 from "../components/Assets/blog1.jpg"
import blog2 from "../components/Assets/blog2.jpg"
import Top2 from "../components/Assets/Top2.jpg"
import Bottom1 from "../components/Assets/Bottom1.jpg"
import Outer2 from "../components/Assets/Outer2.jpg"
//import { Link } from '@material-ui/core';

export class Home extends Component {
  render() {
    return (
      <section>
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image1} alt="First slide" width="80px" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image3} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image2} alt="Third slide" />
            </div>
          </div>
          {/* to control right or left */}
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <br></br><br></br>
        {/* coba */}
        <div class="container">
          <div class="row">
            {/* <!-- div image 6 bagian --> */}
            <div class="col-md-4">
              <div className="card mb-2">
                <img className="card-img-top" src={Top2} alt="Card image cap" />
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-md btn-rounded">Button</a>
              </div>
              {/* <img src="img/explore-section1.jpg" alt="" class="img-fluid mb-3 rounded-circle" /> */}
            </div>
            {/* <!-- bagian teks --> */}
            <div class="col-md-4">
              <div className="card mb-2">
                <img className="card-img-top" src={Bottom1} alt="Card image cap" />
                <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-md btn-rounded">Button</a>
              </div>

            </div>

            <div class="col-md-4">
              <div className="card mb-2">
                <img className="card-img-top" src={Outer2} alt="Card image cap" />
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary btn-md btn-rounded">Button</a>
              </div>

            </div>
          </div>
        </div>
        {/*  */}





      </section>
    );
  }
}

export default Home
