import jsdom from "jsdom";
import jquery from "jquery";
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import { expect } from "chai";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/reducers";

//set up testing environment to run like a browser in command line
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;

const $ = jquery(global.window); //construct a jquery instance in nodeJs CLI environment by a mocked browser window  with document in it by jsdom

// build `renderComponent` helper that should render a given react class


// 第二個參數props 是指 該component是直接接受其父component傳給它的值 作為props時的情形， 第三個參數state是指application level state , 也就是存在redux的store裡的state , 這些state在component是container的情況下，會從mapStateToProps 裡從store取得資料然後被作為props被傳入
function renderComponent(ComponentClass, props={}, state={}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass  {...props}/>
    </Provider>
  ); // doc: https://reactjs.org/docs/test-utils.html#renderintodocument

  // doc:  https://reactjs.org/docs/react-dom.html#finddomnode
  return $(ReactDOM.findDOMNode(componentInstance)); // produce HTML  and return an jQuery element
}

// build helper for simulate events

// set up chai-jquery

export { renderComponent, expect };
