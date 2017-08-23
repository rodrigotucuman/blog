import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import BlogApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import promise from 'redux-promise';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import PostFormContainer from './containers/PostFormContainer'

const enhancer = applyMiddleware(promise);
const store  = createStore(BlogApp, {}, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
              <ul>
                  <li><Link to="/">Home</Link></li>
                <li><Link to="/newPost">Create Post</Link></li>
              </ul>

              <hr/>

              <Route exact path="/" component={App} />
              <Route path="/newPost" component={PostFormContainer}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
