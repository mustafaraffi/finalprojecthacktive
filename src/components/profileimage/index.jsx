import React, { Component } from 'react';

import './index.css';

class ProfileImage extends Component {
  constructor () {    
    super()    
   
  }
  render() {
    return (
      <div className="container">
        <div className="grid">
        {
            this.props.imageList.map(image => 
              (
              <div className="cell">
                <img src={image} class="responsive-image" />
              </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default ProfileImage;