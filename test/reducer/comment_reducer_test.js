import { expect } from '../test_helper'
import CommentReducer from '../../src/reducers/comment_reducer'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('CommentReducer', () => {
  it('handle action with unknow type', () => {
    expect(CommentReducer(undefined, {})).to.be.instanceof(Array)
    expect(CommentReducer(undefined, {})).to.eql([])
  })

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' }
    expect(CommentReducer([], action)).to.eql(['new comment'])
  })
})
