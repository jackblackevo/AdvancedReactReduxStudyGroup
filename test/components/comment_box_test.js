import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox Tests', ()=>{
    it('has the corrent class', ()=>{
        const component = renderComponent(CommentBox);
        expect(component).to.have.class('comment-box');
    }    );

    it('has a test area', () =>{
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exist; // no() , chai will recongnize it  

    });

    it('has a button', ()=>{
        const component = renderComponent(CommentBox);
        expect(component.find('button')).to.exist;
    });

});