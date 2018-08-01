import React, { Component } from 'react';
import '../App.css';
import GemsList from './GemsList';

import gems from '../gems';
import Navbar from './Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PageTwo from './PageTwo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <div className="container">
              <Route exact path="/" render={() => (<GemsList gems={gems} />)} />
              <Route exact path="/PageTwo" render={() => (<PageTwo />)} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
