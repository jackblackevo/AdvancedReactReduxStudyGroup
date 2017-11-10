import { renderComponent, expect } from '../test_helper';
import commentBox from '../../src/components/comment_box';

describe('comment_box Test', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(commentBox);
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      // find the textarea html tag    , simulate someone has put cursor on the textarea(which occur a 'change' event) and enter text i.e. 'new comment'
      component.find('textarea').simulate('change', 'new comment');
    });

    it('show that text in text area', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted ,clear the input', () => {
      component.find('form').simulate('submit');   // 呼應 comment_box.js那裡HTML結構改變，這裡就也要跟著改變
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
