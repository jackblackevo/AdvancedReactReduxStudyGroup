import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { saveComment } from "../actions";
import * as actions from "../actions";

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

  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.saveComment(this.state.comment);


    this.setState({
      comment: ''
    });

  }
// 原影片裡是return 一個<form>....</form> 然後把h4 title放在裡面
// 我不想把h4 title放在form裡，所以放在form外面,然後要用一個最外層的div wrapper包起來這所有的東西
// 但是這就產生一個問題  在測試那裡 renderComponent(thisComponent) 後 return出來被jQuery抓起來的就不是像原本
// 影片裡是return一個被JQ包起來的form  而是 <div><form>...</form></div>  那測試那邊的寫法就要跟著再往下找一層form
//  這問題找了超久...
  render() {
    return (
      <div>
        <h4>add a comment</h4>
        <form className="comment-box" onSubmit={this.handleFormSubmit}>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button action="submit">submit the comment</button>
          </div>
        </form>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){

//   return bindActionCreators({saveComment:saveComment},dispatch);

// }

// export default connect(null,mapDispatchToProps)(CommentBox);

export default connect(null, actions)(CommentBox);
