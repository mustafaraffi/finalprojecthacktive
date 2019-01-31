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
      user: this.props.profilename,
      comment:""
    };
    this.handleClick = this.handleClick.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

  }

  handleClick(event) {
    event.preventDefault();
    const likedconst = this.state.liked;
    this.setState({
      liked : !likedconst
    })
  }
  
  onCommentChange(event){
    event.preventDefault();
    this.setState({ 
        comment: event.target.value 
      })
  }

  handleKeyDown(event) {
    console.log("Masuk fungsi Comment " + event.target.id);
    if (event.which === 13 && this.state.comment.trim().length > 0) {
      var payload = {
         id: event.target.id,
        comments : {
          user : this.state.user,
          comment : this.state.comment,
        }
      }
      this.props.addComment(payload);
      this.setState({ comment: "" });
    }
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
              <div className="Post-likes">
                {user.likeCount} {user.likeCount === 1 ? 'like' : 'likes'}
              </div> 
              <div className="Post-caption">
                <strong>{user.username}</strong> {user.caption}
              </div>
              {
                user.comments.map(
                  comment => (
                    <div className="Post-comment">
                        <strong>{comment.user}</strong> {comment.comment}
                    </div>
                  )
                )
              }
              <div className="Post-action-box">
                <div className="Post-like-button">
                  <button
                    className="LikeButton__root"
                    onClick={()=>this.props.likedPost(user.id)}>
                    {user.isLiked ?
                    (<i className="fas fa-heart LikeButton__icon LikeButton__icon--liked"/>) :
                    (<i className="far fa-heart LikeButton__icon"/>)}
                  </button>
                </div>
                <div className="Post-comment-box">
                  <div className="CommentBox__root">
                    <input
                      id={user.id}
                      className="CommentBox__input"
                      type="text"
                      placeholder="Add a comment..."
                      onChange={this.onCommentChange}
                      onKeyDown={this.handleKeyDown}
                      value={this.state.comment}
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