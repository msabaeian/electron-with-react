import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './pages/home';
import Msabaeian from './pages/Msabaeian';

// render on page
ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/msabaeian">about</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/msabaeian" component={Msabaeian} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);