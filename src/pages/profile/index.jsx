import React, { Component } from 'react';

import Header from '../../components/header';
import ProfileInfo from '../../components/profileinfo';
import ProfileImage from '../../components/profileimage';
import './index.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfileInfo />
        <ProfileImage />
      </div>
    );
  }
}

export default Profile;