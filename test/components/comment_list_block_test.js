import { renderComponent, expect } from '../test_helper'
import CommentListBlock from '../../src/components/comment_list_block'

describe('CommentList', () => {
  let component

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] }
    component = renderComponent(CommentListBlock, null, props)
  })

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2)
  })

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment')
    expect(component).to.contain('Other New Comment')
  })
})