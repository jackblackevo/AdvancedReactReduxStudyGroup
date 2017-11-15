import React, { Component } from 'react';
import CommentBox from './comment_box'
import CommentListContainer from './comment_list_container'

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentListContainer />
      </div>
    );
  }
}
