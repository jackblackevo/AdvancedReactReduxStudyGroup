import React from 'react'
import { connect } from 'react-redux'
import CommentList from './comment_list'

function mapStateToProps(state) {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)