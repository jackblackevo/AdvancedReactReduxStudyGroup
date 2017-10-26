import {renderComponent, expect} from '../test_helper';
import commentBox from '../../src/components/comment_box';

describe('comment_box Test',()=>{

  it('has a textarea',()=>{
    const component = renderComponent(commentBox);
    expect(component.find('textarea')).to.exist;
  })

   it('has a button',()=>{
    const component = renderComponent(commentBox);
     expect(component.find('button')).to.exist;
   })

});


it
expect
