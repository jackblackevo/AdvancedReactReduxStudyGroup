import React, { Component } from 'react'

export default class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      comment: ''
    })
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <button>Submit comment</button>
      </form>
    )
  }
}