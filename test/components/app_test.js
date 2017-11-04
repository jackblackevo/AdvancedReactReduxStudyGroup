import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

describe('APP test',()=>{

  let component;
    beforeEach(()=>{

      component = renderComponent(App)
    });

   it('has commentBox',()=>{
    expect(component.find('.comment-box')).to.exist;
   });

   it('show a comment-list',()=>{

    expect(component.find('.comment-list')).to.exist;
   });

});

