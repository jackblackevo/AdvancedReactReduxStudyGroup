import React, { Component } from 'react'

export default class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    return (
      <div className="comment-box">
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <button>Submit comment</button>
      </div>
    )
  }
}