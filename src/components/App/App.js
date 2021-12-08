import React, { Component } from "react";
import { connect } from "react-redux";

import Congrats from "../Congrats/Congrats";
import GuessedWords from "../GuessedWords/GuessedWords";
import Input from "../Input/Input";

import { getSecretWord } from "../../actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({
  success,
  guessedWords,
  secretWord,
});

const mapDispatchToProps = {
  getSecretWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
