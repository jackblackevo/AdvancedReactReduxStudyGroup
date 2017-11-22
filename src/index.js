import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './auth/components/app';
import reducers from './reducers';
import authReducers from './auth/reducers';
import Header from './auth/components/header';
import Resource from './auth/components/resource';


const createStoreWithMiddleware = applyMiddleware()(createStore);

//  reducers,

ReactDOM.render(                             // 這裡只能放一個 rootReducer ?
  <Provider store={createStoreWithMiddleware(authReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>

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
