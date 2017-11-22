import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './auth/components/app';
import reducers from './reducers';
import Header from './auth/components/header';
import Resource from './auth/components/resource';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

     <Router history={browserHistory}>

       <Route path="/" component={App} >
          <Route path="resource" component={Resource} />
       </Route>

     </Router>

  </Provider>
  , document.querySelector('.container'));








  //    <BrowserRouter>
  //    <div>
  //    <Route path="/" component={App} />

  //       <Switch>
  //          <Route path="/resource" component={Resource} />
  //       </Switch>

  //    </div>
  // </BrowserRouter>
//  Header.js裡  import Link時要改成  import {Link} from 'react-router-dom';
