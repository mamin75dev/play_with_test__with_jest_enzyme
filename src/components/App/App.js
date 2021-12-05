// import React, { Component } from "react";
// // import { List } from './components/List';

// export default class App extends Component {
//   state = {
//     counter: 0,
//   };

//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   decrement = () => {
//     if (this.state.counter > 0) {
//       this.setState({ counter: this.state.counter - 1 });
//     }
//   };

//   render() {
//     return (
//       <div className="App" data-test="app">
//         <h1 data-test="counter-display">{this.state.counter}</h1>
//         <br />
//         <button data-test="decrement" onClick={this.decrement}>
//           Decrement
//         </button>
//         <button data-test="increment" onClick={this.increment}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

import Congrats from "../Congrats/Congrats";
import GuessedWords from "../GuessedWords/GuessedWords";
import Input from "../Input/Input";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Jotto</h1>
        <Congrats success={true} />
        <Input />
        {/* <GuessedWords
          guessedWords={[
            {
              guessedWord: "train",
              letterMatchCount: 3,
            },
          ]}
        /> */}
      </div>
    );
  }
}
