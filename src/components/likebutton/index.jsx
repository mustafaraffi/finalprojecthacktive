import React, { Component } from 'react';

import './index.css';

class LikeButton extends Component {
  render() {
    return (
      <button
        className="LikeButton__root"
        onClick={this.handleClick}>
        {this.props.liked ?
        (<i className="fas fa-heart LikeButton__icon LikeButton__icon--liked"/>) :
        (<i className="far fa-heart LikeButton__icon"/>)}
      </button>
    );
  }
}

export default LikeButton;