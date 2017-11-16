import { renderComponent, expect } from '../test_helper'
import CommentBoxContainer from '../../src/components/comment_box_container'

describe('Comment Box', () => {
  let component

  beforeEach(() => {
    component = renderComponent(CommentBoxContainer)
  })

  it('has the correct class', () => {
    expect(component.find('form')).to.have.class('comment-box')
  })

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist
  })

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment')
    })

    it('show that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    })

    it('when submitted, clears the input', () => {
      component.find('form').simulate('submit')
      expect(component.find('textarea')).to.have.value('')
    })
  })
})
