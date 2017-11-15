import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// set up testing environment to run like a browser in command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

//construct a jquery instance in nodeJs CLI environment by a mocked browser window  with document in it by jsdom
const $ = jquery(global.window);
// 找不到這行的文件出處
// set up chai-jquery
chaiJquery(chai, chai.util, $);

// build `renderComponent` helper that should render a given react class
// 第二個參數 props 是指該 component 是直接接受其父 component 傳給它的值作為 props 時的情形
// 第三個參數 state 是指 application level state，也就是存在 redux 的 store 裡的 state
// 這些state在component是container的情況下，會從 mapStateToProps 裡從 store 取得資料然後被作為 props 被傳入
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  // doc: https://reactjs.org/docs/test-utils.html#renderintodocument

  // doc:  https://reactjs.org/docs/react-dom.html#finddomnode
  // produce HTML  and return an jQuery element
  return $(ReactDOM.findDOMNode(componentInstance));
}

// build helper for simulate events
//  $.fn  這行表示在所有 jQuery生出來的jQuery element之下 加上一個simulate方法
// btw $.extend(...)  是把 function直接加在$底下(像$.ajax那樣) 不是加在每一個 jQuery element下
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, expect };
