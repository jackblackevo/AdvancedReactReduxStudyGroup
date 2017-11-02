import React, { Component } from 'react';
import CommentBox from './comment_box'
import CommentListBlock from './comment_list_block'

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentListBlock />
      </div>
    );
  }
}
