import React, { Component } from 'react';
import CommentBoxContainer from './comment_box_container'
import CommentListContainer from './comment_list_container'

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBoxContainer />
        <CommentListContainer />
      </div>
    );
  }
}
