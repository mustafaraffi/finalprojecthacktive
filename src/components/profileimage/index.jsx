import React, { Component } from 'react';

import './index.css';

class ProfileImage extends Component {
  constructor () {    
    super()    
    this.state = {      
        images : [
                  "https://loremflickr.com/cache/resized/4827_46223663272_a329115870_n_320_240_nofilter.jpg",
                  "https://loremflickr.com/cache/resized/4813_46653823072_ea1915c7e9_320_240_nofilter.jpg",
                  "https://loremflickr.com/cache/resized/7848_31828778427_ff2a1a8b1b_n_320_240_nofilter.jpg",
                ],

    }
  }
  render() {
    return (
      <div className="row ProfileImage__row">
          {
            this.state.images.map(image => 
              (
              // <div className="square">
				      //   <img className="img-fluid img-thumbnail" src={image} />
              // </div>
              <div className="col square">
                  <div className="content">
                      <div className="table">
                          <div className="table-cell">
                              <img className="rs" src={image}/>
                          </div>
                      </div>
                  </div>
              </div>
              )
            )
          }
    </div>
    
    );
  }
}

export default ProfileImage;