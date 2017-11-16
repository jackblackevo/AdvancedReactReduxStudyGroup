import React from 'react'

export default (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>)
  return (
    <ul className="comment-list">
      {list}
    </ul>
  )
}