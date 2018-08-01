import React, { Component } from 'react';
import '../App.css';
import GemsList from './GemsList';

import gems from '../gems';

class App extends Component {
  render() {
    return (
      <div>
        <GemsList gems={gems} />
      </div>
    );
  }
}

export default App;
