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

function renderComponent(ComponentClass) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers)}>
      <ComponentClass />
    </Provider>
  ); // doc: https://reactjs.org/docs/test-utils.html#renderintodocument

  // doc:  https://reactjs.org/docs/react-dom.html#finddomnode
  return $(ReactDOM.findDOMNode(componentInstance)); // produce HTML  and return an jQuery element
}

// build helper for simulate events

// set up chai-jquery

export { renderComponent, expect };
