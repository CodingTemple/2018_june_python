import React, { Component } from 'react';
import '../App.css';
import GemsList from './GemsList';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import gems from '../gems';
import Navbar from './Navbar';
import PageTwo from './PageTwo';

class App extends Component {
  getSubtotal = () => "subtotal"
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <div className="container">
              <Route exact path="/" render={() => (<GemsList gems={gems} subtotal={this.getSubtotal} />)} />
              <Route exact path="/PageTwo" component={PageTwo} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
