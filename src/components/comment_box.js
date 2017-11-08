import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveComment} from '../actions';
import * as actions from '../actions/index';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      comment: e.target.value
    });

    console.log('current comment :', this.state.comment);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      comment:''
    });

    this.props.saveComment(this.state.comment);
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleFormSubmit}>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <button action="submit">submit the comment</button>
      </form>
    );
  }
}




// function mapDispatchToProps(dispatch){

//   return bindActionCreators({saveComment:saveComment},dispatch);

// }

// export default connect(null,mapDispatchToProps)(CommentBox);

export default connect(null,actions)(CommentBox);
