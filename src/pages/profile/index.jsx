import React, { Component } from 'react';

import Header from '../../components/header';
import ProfileInfo from '../../components/profileinfo';
import ProfileImage from '../../components/profileimage';
import './index.css';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getDataProfileAPI} from '../../redux/profile/actions';

class Profile extends Component {
  componentDidMount(){
    this.props.getDataProfileAPI();
  }
  render() {
    return (
      <div>
        {
            this.props.isLogin ? 
            <Redirect  to={'/profile'}/> : <Redirect  to='/'/>
        }
        <Header />
        <ProfileInfo profilename = {this.props.profilename} 
        fullname = {this.props.fullname}
        bio = {this.props.bio}
        profile_picture = {this.props.profile_picture}
        followers = {this.props.followers}
        following = {this.props.following}
        postCount = {this.props.galery.length}
        />
        <ProfileImage imageList = {this.props.galery}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profilename: state.profile.profilename,
  fullname: state.profile.fullname,
  bio: state.profile.bio,
  profile_picture: state.profile.profile_picture,
  galery: state.profile.galery,
  followers: state.profile.followers,
  following: state.profile.following,
  isLogin: state.post.isLogin,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDataProfileAPI,
}, dispatch)


export default connect (mapStateToProps , mapDispatchToProps)(Profile);