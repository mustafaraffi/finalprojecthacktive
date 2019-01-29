import React, { Component } from 'react';

import './index.css';
import {Link, NavLink, Redirect} from 'react-router-dom';
import BackgroundSlideshow from 'react-background-slideshow';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getDataPost, loginSuccess} from '../../redux/post/actions';

const fadeImages = [
  require('../../assets/image/landingpage/1.jpg'),
  require('../../assets/image/landingpage/2.jpg'),
  require('../../assets/image/landingpage/3.jpg'),
  require('../../assets/image/landingpage/4.jpg'),
  require('../../assets/image/landingpage/5.jpg'),
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}



const validateEmail= (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const validatePassword= (password) => {
  var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}
class LandingPage extends Component {
  constructor(){
    super();
    this.state={
      email : '',
      password : '',
      fullname : '',
      password : ''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange (event) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState(
      { [event.target.name]: event.target.value }
      );
  }
  
  

  handleClick(event){
      var payload = {
        email : "",
        fullname : this.state.fullname,
        profilename : this.state.profilename,
        password : ""
      }
      event.preventDefault();
      if (validateEmail(this.state.email)){
        payload.email=this.state.email;
      }else{
        alert("Email not Valid");
        document.getElementById("email").focus();
        return;
      }
      if (validatePassword(this.state.password)){
        payload.password=this.state.password;
      }else{
        alert("Minimum eight characters, at least one letter and one number");
        document.getElementById("password").focus();
        return;
      }
      this.props.loginSuccess(payload);

  }

  responseFacebook = (response) => {
    var payload = {
      email : "",
      fullname : response.name,
      profilename : "",
      password : ""
    }
    console.log("response " + response.name);
    if (response.id.length > 0 ){
      this.props.loginSuccess(payload);
    }
  }
  render() {
    return (
      <div className = "row">
        {
            this.props.isLogin ? 
            <Redirect  to={'/home'}/> : <Redirect  to='/'/>
        }
        <div className = "col Landingpage__handphone">
          <div className=' phone '>

            <div className=' headphones '>
              <BackgroundSlideshow animationDelay='5000' images={fadeImages} />
            </div>
          </div>
        </div>

        <div className = "col">
          <div className="card LandingPage__card">
              <div className="card-header mx-auto">
                <h3>InstaBoom</h3>
              </div>
              <div className="card-body">
                  
                <FacebookLogin
                    appId="309807836548404"
                    callback={this.responseFacebook}
                    render={renderProps => (
                      <div>
                        <button onClick={renderProps.onClick} className="btn btn-block btn-social btn-facebook">
                          <i className="fab fa-facebook"></i> Login with Facebook
                        </button>
                      </div>
                    )}
                  />
                  <div className="d-flex justify-content-center p-4">
                      <h4>&mdash;&mdash;&mdash;&mdash;OR&mdash;&mdash;&mdash;&mdash;</h4>
                  </div>
                <form>
                  <div className="input-group form-group">
                    <input type="text"   className="form-control" placeholder="Email" id="email" name="email"
                      autoComplete="username" onChange = {this.handleChange}>
                    </input>
                  </div>
                  <div className="input-group form-group">
                    <input type="text" className="form-control" placeholder="Full Name" name="fullname" 
                      autoComplete ="current-password" onChange = {this.handleChange}>
                    </input>
                  </div>
                  <div className="input-group form-group">
                    <input type="text"   className="form-control" placeholder="Username" name="username"
                      autoComplete="username" onChange = {this.handleChange}>
                    </input>
                  </div>
                  <div className="input-group form-group">
                    <input id="password" type="password" className="form-control" placeholder="Password" name="password" 
                      autoComplete ="current-password" onChange = {this.handleChange}>
                    </input>
                  </div>
                </form>
              </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit" value="Login" onClick={(event) => this.handleClick(event)}>Sign Up</button>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                   Have an account?&nbsp;&nbsp;<Link to='/signin'>Login</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.post.email,
  fullname: state.post.fullname,
  profilename: state.post.profilename,
  password: state.post.password,
  isLogin: state.post.isLogin,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDataPost, loginSuccess,
}, dispatch)

export default connect (mapStateToProps , mapDispatchToProps)(LandingPage);