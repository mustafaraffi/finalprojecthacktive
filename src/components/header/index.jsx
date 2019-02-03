import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './index.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {doLogout} from '../../redux/post/actions';

class Header extends Component {
  render() {
    return (
      <header className="Header__root">
      <div className="container">
        <div className="row  Header__container">
          <div className="col-3">
            <h1 className="Header__logo">
              <Link to="/home" className="Header__logo-link">
                <i className="fab fa-instagram Header__instagram-icon" aria-hidden="true"/> InstaBoom</Link>
            </h1>
          </div>
          <div className="offset-md-1 col-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary btn-sm" type="button"><i className="fas fa-search"></i></button>
              </div>
          </div>
          </div>
          <nav className="offset-md-3 col-2">
          <ul className="Header__nav-group">
            <li className="Header__nav-link">
              <Link to="/explore">
                <i className="far fa-compass fa-2x Header__nav-icon" aria-hidden="true"/>
              </Link>
            </li>
            <li className="Header__nav-link Header__notification-nav">
              <Link to="/notification">
                <i className="far fa-heart fa-2x Header__nav-icon" aria-hidden="true"/>
              </Link>
            </li>
            <li className="Header__nav-link">
              <Link to="/profile">
                <i className="far fa-user fa-2x Header__nav-icon" aria-hidden="true"/>
              </Link>
            </li>
            <li className="Header__nav-link">
              <Link to="/" onClick={this.props.doLogout}>
                <i className="fas fa-sign-out-alt fa-2x Header__nav-icon" aria-hidden="true"/>
              </Link>
            </li>
          </ul>
          </nav>
        </div>
      </div>
    </header>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.post.isLogin,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doLogout
}, dispatch)

export default connect (mapStateToProps , mapDispatchToProps)(Header);
