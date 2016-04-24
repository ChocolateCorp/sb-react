import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import About from './pages/About';
import Employees from './pages/Employees';
import EmployeeProfile from './pages/EmployeeProfile';
import Contact from './pages/Contact';

import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="employees" component={Employees}></Route>
            <Route name="employee" path="employee/:id" component={EmployeeProfile}></Route>            
            <Route path="contact" component={Contact}></Route>
        </Route>
    </Router>
 </Provider>
    , document.getElementById('app'));