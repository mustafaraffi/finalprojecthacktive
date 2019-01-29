import React, { Component } from 'react';
import './index.css';
import moment from 'moment';


const getImage = (url) => {
  return require(`${url}`)
}

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const likedconst = this.state.liked;
    this.setState({
      liked : !likedconst
    })
  }
  
  render() {
    return (
        <div>
        {
          this.props.users.map(
            user => (
            <article className="Post" ref="Post">
              <header>
                <div className="Post-user">
                  <div className="Post-user-avatar">
                    <img src={user.avatarimage} alt="Chris" />
                  </div>
                  <div className="Post-user-nickname">
                    <span>{user.username}</span>
                  </div>
                  <div className="Post-header-timestamp">
                  {console.log(user.posdate)}
                    {moment(`${user.postdate}`, "YYYYMMDD").fromNow()}
                  </div>
                </div>
              </header>
              <div className="Post-image">
                <div className="Post-image-bg">
                  <img alt="Icon Living" src={user.postimage} />
                </div>
              </div>
              <div className="Post-caption">
                <strong>{user.username}</strong> {user.caption}
              </div>
              <div className="Post-action-box">
                <div className="Post-like-button"> 
                  <button
                    className="LikeButton__root"
                    onClick={this.handleClick}>
                    {this.state.liked ?
                    (<i className="fas fa-heart LikeButton__icon LikeButton__icon--liked"/>) :
                    (<i className="far fa-heart LikeButton__icon"/>)}
                  </button>
                </div>
                <div className="Post-comment-box">
                  <div className="CommentBox__root">
                    <input
                      className="CommentBox__input"
                      type="text"
                      placeholder="Add a comment..."
                      value=""
                    />
                  </div>
                </div>
              </div>
              </article>
            )
          )
        }
       </div>   

    );
  }
}

export default Post;