import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';

import LikeButton from '../likebutton';
import CommentBox from '../commentbox';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.onImageDoubleClick = this.onImageDoubleClick.bind(this);
  }
  
  onImageDoubleClick(event) {
    event.preventDefault();
    if (!this.props.liked) {
      this.props.onLike()
    }
  }
  render() {
    const {
      photoUrl,
      createdAt,
      filter,
      address,
      placeId,
      user: {
        username,
        avatarUrl
      }
    } = this.props;
    return (
      <article className="GalleryItem__root">
        <div className="GalleryItem-header">
          <div className="GalleryItem-header__avatar-container">
            <img
              // src={avatarUrl}
              src=""
              className="GalleryItem-header__avatar-img"
              alt={`${username} profile`}
            />
          </div>
          <div className="GalleryItem-header__metadata-container">
            <div className="GalleryItem-header__username">
              <Link to={`/${username}`}>{username}</Link>
            </div>
            {address ?
            (<div className="GalleryItem-header__address">
              <Link to={`/explore/locations/${placeId}`}>{address}</Link>
            </div>) : null}
          </div>
          <div className="GalleryItem-header__timestamp">
            {/* {moment(createdAt).fromNow()} */}
            {moment([2019, 0, 28]).fromNow()}
          </div>

        </div>
        <div
          onDoubleClick={this.onImageDoubleClick}
          className="GalleryItem__body">
          {/* <img src={getImageUrl(photoUrl)} role="presentation" /> */}
          <img src="https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" role="presentation" />
        </div>
        <div className="GalleryItem__footer">
          <div className="GalleryItem__action-box">
            <div className="GalleryItem__like-button">
              <LikeButton
                onLike={this.props.onLike}
                onDislike={this.props.onDislike}
                liked={this.props.liked}
              />
            </div>
            <div className="GalleryItem__comment-box">
              <CommentBox onSubmit={this.props.onCommentSubmit} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Gallery;