import React, { Component } from 'react';

import './index.css';

class ProfileInfo extends Component {
  render() {
    return (
      <div className="row justify-content-center pt-5">
	      <div className="mt-auto">
	        <div className="media">
            <div className="media-left">
              <a href="#">
                <img
									className="media-object"
									src="https://www.damiadenuga.com.ng/wp-content/uploads/2019/01/Higuain-500x500.jpg"
									alt="profile-pic"
								/>
              </a>
            </div>
            <div className="media-body pl-4">
              <h2 className="media-heading mt15">golazo</h2>
              <h4><strong>Gonzalo Higuain</strong> Football Striker</h4>
              <ul className="header-ul">
                <li><strong>50</strong> posts</li>
                <li><strong>300k</strong> followers</li>
                <li><strong>180</strong> following</li>
              </ul>
            </div>
          </div>
        </div>
	    </div>
    );
  }
}

export default ProfileInfo;