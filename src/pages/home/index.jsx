import React, { Component } from 'react';
import Header from '../../components/header';
import Post from '../../components/post';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getDataPost} from '../../redux/post/actions';

class Home extends Component {
  componentDidMount(){
    this.props.getDataPost();
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post users={this.props.users}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.post.users,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDataPost,
}, dispatch)

export default connect (mapStateToProps , mapDispatchToProps)(Home);