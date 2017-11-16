import { renderComponent, expect } from '../test_helper'
import CommentListContainer from '../../src/components/comment_list_container'

describe('CommentListContainer', () => {
  let component

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] }
    component = renderComponent(CommentListContainer, null, props)
  })

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2)
  })

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment')
    expect(component).to.contain('Other New Comment')
  })
})