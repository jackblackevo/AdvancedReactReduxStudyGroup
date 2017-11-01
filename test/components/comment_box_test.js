import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox Tests', ()=>{
    let component;
     //run before each "it" 
     beforeEach(()=>{
        component = renderComponent(CommentBox);     
    });

    it('has the corrent class', ()=>{
        expect(component).to.have.class('comment-box');
    }    );

    it('has a test area', () =>{
        expect(component.find('textarea')).to.exist; // no() , chai will recongnize it  

    });

    it('has a button', ()=>{
        expect(component.find('button')).to.exist;
    });

});