import React, { Component } from 'react';
import '../App.css';

// Import all components here
import Title from './Title';
import List from './List';

const todos1 = ["do laundry", "take out trash", "clearn bathrooms"];
const todos2 = ["mow the lawn", "walk the dog", "feed the birds"];
const todos3 = ["exercise", "cook dinner", "buy some mushrooms"];


class App extends Component {
  render() {
    return (
      <div>
        <Title title="My ToDos" />

        <List todos={todos1} />
        <List todos={todos2} />
        <List todos={todos3} />

        <Title title="Completed" />
      </div>
    );
  }
}

export default App;
