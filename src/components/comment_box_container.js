import CommentBox from './comment_box'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

export default connect(null, actions)(CommentBox)