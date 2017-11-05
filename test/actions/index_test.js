import { expect } from "../test_helper";
import { SAVE_COMMENT } from "../../src/actions/types";
import {saveComment} from '../../src/actions';

describe("actions", () => {
  describe("saveComment", () => {

    let  theAction;
    let newCommentText;
beforeEach(()=>{
  newCommentText = 'new comment';
  theAction = saveComment(newCommentText);
});

    it("has the correct type", () => {

      expect(theAction).to.have.property('type');
      expect(theAction.type).to.be.a('string');
      expect(theAction.type).to.equal(SAVE_COMMENT);
    });

    it("has the correct payload", () => {

    expect(theAction).to.have.property('payload');
    expect(theAction.payload).to.be.a('string');
    expect(theAction.payload).to.equal('new comment');

    });
  });
});
