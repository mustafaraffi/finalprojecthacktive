import React, { Component } from 'react';

import './index.css';

class ProfileInfo extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="row justify-content-center pt-5">
	      <div className="mt-auto">
	        <div className="media">
            <div className="media-left">
              <a href="#">
                <img
									className="media-object"
									src={this.props.profile_picture}
									alt="profile-pic"
								/>
              </a>
            </div>
            <div className="media-body pl-4 ">
              <h2 className="media-heading mt15">{this.props.profilename}</h2>
              <h4><strong>{this.props.fullname}</strong></h4>
              <div className = "profile__bio">{this.props.bio}</div>
              <ul className="header-ul">
                <li><strong>{this.props.postCount}</strong> posts</li>
                <li><strong>{this.props.followers}</strong> followers</li>
                <li><strong>{this.props.following}</strong> following</li>
              </ul>
            </div>
          </div>
        </div>
	    </div>
    );
  }
}

export default ProfileInfo;