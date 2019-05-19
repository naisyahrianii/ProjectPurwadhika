import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import { onRegisterUser } from '../actions'
import { timeout } from '../actions'

export class Register extends Component {


  onRegisterClick = () => {
    const name = this.name.value
    const user = this.username.value
    const mail = this.email.value
    const pass = this.password.value
    this.props.onRegisterUser(name,user, mail, pass)

    console.log(name, user, mail, pass)
  }


  onErrorRegister = () => {
    setTimeout((this.props.timeout),3000);
    if(this.props.error !== ''){
      return (
        <div className="alert alert-danger mt-4">
          {this.props.error}
        </div>
      )  
    }
    else if(this.props.success !== ''){
      return (
        <div className="alert alert-success mt-4">
          {this.props.success}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="mt-5 row">
          <div className="col-sm-3 mx-auto card">
            <div className="card-body">
              <div className="border-bottom border-secondary card-title">
                <h1>Register</h1>
              </div>
              <div className="card-title mt-1">
                <h4>Name</h4>
              </div>
              <div className="input-group">
                <input ref={input => { this.name = input }} className='form-control'></input>
              </div>
              <div className="card-title mt-1">
                <h4>Username</h4>
              </div>
              <div className="input-group">
                <input ref={input => { this.username = input }} className='form-control'></input>
              </div>
              <div className="card-title mt-1">
                <h4>Email</h4>
              </div>
              <div className="input-group">
                <input ref={input => {this.email = input}} className='form-control'></input>
              </div>
              <div className="card-title mt-1">
                <h4>Password</h4>
              </div>
              <form className="input-group">
                <input ref={input => { this.password = input }} className="form-control" type="password" />
              </form>
              <button className="btn btn-success btn-block mt-5"
                onClick={this.onRegisterClick}>Register</button>
                  {this.onErrorRegister()}
                
              <p className="lead">Do you have account ? <Link to="/login">Sign In!</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {error: state.auth.error, success: state.auth.success}
}

export default connect(mapStateToProps, { onRegisterUser, timeout })(Register)


// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import {connect} from 'react-redux'

// import { onRegisterUser } from '../actions'
// import { timeout } from '../actions'

// import GridContainer from "../components/Grid/GridContainer.jsx";
// import GridItem from "../components/Grid/GridItem.jsx";
// import Card from "../components/Card/Card";
// import CardBody from "../components/Card/CardBody.jsx";
// import CardHeader from "../components/Card/CardHeader.jsx";
// import CardFooter from "../components/Card/CardFooter.jsx";
// import Button from "../components/CustomButtons/Button.jsx";
// import CustomInput from "../components/CustomInput/CustomInput.jsx";

// export class Register extends Component {

//   onRegisterClick = () => {
//     const name = this.name.value
//     const user = this.username.value
//     const mail = this.email.value
//     const pass = this.password.value
//     this.props.onRegisterUser(name, user, mail, pass)
//   }

//   onErrorRegister = () => {
//     setTimeout((this.props.timeout),3000);
//     if(this.props.error !== ''){
//       return (
//         <div className="alert alert-danger mt-4">
//           {this.props.error}
//         </div>
//       )  
//     }
//     else if(this.props.success !== ''){
//       return (
//         <div className="alert alert-success mt-4">
//           {this.props.success}
//         </div>
//       )
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="container">
//         <GridContainer justify="center">
//           <GridItem xs={12} sm={12} md={4}>
//             <Card className="cardAnimaton">
//               <form className="form">
//                 <CardHeader color="primary" className="cardHeader">
//                   <h4>Register</h4>
//                 </CardHeader>
                
//                 <CardBody>
//                   <CustomInput
//                     labelText="Name"
//                     id="name"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text"
//                     }}
//                     ref={input => { this.name = input }}
//                   />
//                   <CustomInput
//                     labelText="Username"
//                     id="username"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text"
//                     }}
//                     ref={input => { this.username = input }}
//                   />
//                   <CustomInput
//                     labelText="Email"
//                     id="email"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "email"
//                     }}
//                     ref={input => { this.email = input }}
//                   />
//                   <CustomInput
//                     labelText="Password"
//                     id="pass"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{type: "password"}}
//                     ref={input => { this.password = input }}
//                   />
//                 </CardBody>
//                 <CardFooter className="cardFooter">
//                   <Button className="btn btn-primary btn-block mt-5" color="primary" onClick={this.onRegisterClick}>
//                     Get started
//                   </Button>
//                   {this.onErrorRegister()}
//                 </CardFooter>
//               </form>
//             </Card>
//           </GridItem>
//         </GridContainer>
//       </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//     return {error: state.auth.error, success: state.auth.success}
//   }
  
//   export default connect(mapStateToProps, { onRegisterUser, timeout })(Register)