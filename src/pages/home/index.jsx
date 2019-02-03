import React, { Component } from 'react';
import Header from '../../components/header';
import Post from '../../components/post';

import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getDataPost, likedPost, addComment, getDataPostAPI} from '../../redux/post/actions';

class Home extends Component {
  componentDidMount(){
    this.props.getDataPostAPI();
  }
  render() {
    return (
      <div>
        {
            this.props.isLogin ? 
            <Redirect  to={'/home'}/> : <Redirect  to='/'/>
        }
        <Header />
        <div>
          <Post users={this.props.users} likedPost={this.props.likedPost} addComment={this.props.addComment} profilename={this.props.profilename}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.post.users,
  isLogin: state.post.isLogin,
  profilename: state.post.profilename,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDataPost, likedPost, addComment, getDataPostAPI
}, dispatch)

export default connect (mapStateToProps , mapDispatchToProps)(Home);