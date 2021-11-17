import React, {Component} from 'react';
import './App.css';
// import { List } from './components/List';

export default class App extends Component {
  state = {
    counter: 0,
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }
  
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1})
    }
  }

  render() {
    return (
      <div className="App" data-test="app">
        <h1>{this.state.counter}</h1>
        <br />
        <button data-test="decrement" onClick={this.decrement}>Decrement</button>
        <button data-test="increment" onClick={this.increment}>Increment</button>
      </div>
    )
  }
}