import React from "react";
import { connect } from "react-redux";

// functional component  沒有 render方法  直接return 要render的東西 , 也不會有自己的state , 完全純粹接收props 然後呈現畫面
const CommentList = props => {
  const list = props.comments.map((comment,index) => <li key={index}>{comment}</li>);

  return <ul className="comment-list">{list}</ul>;
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, null)(CommentList);
