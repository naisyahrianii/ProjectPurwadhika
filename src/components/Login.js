import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {onLoginclick} from '../actions'
import {timeout} from '../actions'

import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";

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
      // if(this.props.user !== ''){
      //   return (
      //     <div className='container'>
      //       <GridContainer justify='center'>
      //         <GridItem xs={12} sm={12} md={4}>
      //           <Card className="cardAnimaton">
      //             <form className='form'>
      //             <CardHeader color="primary" className="cardHeader">
      //                <h4>Login</h4>
      //             </CardHeader>
      //             <CardBody>
      //               <CustomInput
      //                   labelText="Username" id="user"
      //                   formControlProps={{
      //                     fullWidth: true
      //                   }}
      //                   inputProps={{
      //                     type: "username",
                          
      //                   }}
      //                   ref={input => { this.username = input }}
      //                 />
      //                 <CustomInput
      //                   labelText="Password"
      //                   id="pass"
      //                   formControlProps={{
      //                     fullWidth: true
      //                   }}
      //                   inputProps={{
      //                     type: "password",
      //                   }}
      //                   ref={input => { this.password = input }}
      //                 />
      //               </CardBody>
      //               <CardFooter className="cardFooter">
      //                  <Button className="btn btn-primary btn-block mt-5" color="primary" onClick={this.onSubmitClick}>
      //                    <Link to='/'>Get started</Link>
      //                  </Button>
      //               </CardFooter>
      //             </form>
      //           </Card>
      //         </GridItem>
      //       </GridContainer>
      //     </div>
      //   )
      // }

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
                  <div className="card-title mt-1">
                    <h4>Password</h4>
                  </div>
                  <form className="input-group">
                    <input ref={input => { this.password = input }} className="form-control" type="password" />
                  </form>
                  <button className="btn btn-success btn-block mt-5"
                    onClick={this.onSubmitClick}><Link to="/">Login</Link></button>
                    {this.onErrorLogin()}
  
                  <p className="lead">Don't have account ? <Link to="/register">Sign Up!</Link></p>
                </div>
              </div>
            </div>
          </div>
        )
      }
      else {
        return <Redirect to="/Home"/>
      }
    }
    // render() {
    //   const { classes, ...rest } = this.props;
    //   if(this.props.user !== ''){
    //     return (
    //       <div>
    //         <div className="container">
    //         <GridContainer justify="center">
    //           <GridItem xs={12} sm={12} md={4}>
    //             <Card className="cardAnimaton">
    //               <form className="form">
    //                 <CardHeader color="primary" className="cardHeader">
    //                   <h4>Login</h4>
                      
    //                 </CardHeader>
    //                 <CardBody>
    //                 <CustomInput
    //                     labelText="Username"
    //                     id="user"
    //                     formControlProps={{
    //                       fullWidth: true
    //                     }}
    //                     inputProps={{
    //                       type: "username",
                          
    //                     }}
    //                     ref={input => { this.username = input }}
    //                   />
    //                   <CustomInput
    //                     labelText="Password"
    //                     id="pass"
    //                     formControlProps={{
    //                       fullWidth: true
    //                     }}
    //                     inputProps={{
    //                       type: "password",
    //                     }}
    //                     ref={input => { this.password = input }}
    //                   />
    //                 </CardBody>
    //                 <CardFooter className="cardFooter">
    //                   <Button className="btn btn-primary btn-block mt-5" color="primary">
    //                     Get started
    //                   </Button>
    //                 </CardFooter>
    //               </form>
    //             </Card>
    //           </GridItem>
    //         </GridContainer>
    //       </div>
    //       </div>
    //     )
    //   }
    //   else {
    //     return <Redirect to="/"/>
    //   }
    // }
  }
  
  const mapStateToProps = (state) => {
    return {user: state.auth}
  }
  
  export default connect(mapStateToProps, { onLoginclick, timeout })(Login)
  
