import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { guessWords } from "../../actions";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  // static propTypes = {
  //   prop: PropTypes,
  // };

  content() {
    const { success } = this.props;
    if (success) {
      return null;
    }
    return (
      <form>
        <input
          data-test="input-word"
          type="text"
          placeholder="Guess word!"
          className="input"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="button is-primary"
        >
          Submit
        </button>
      </form>
    );
  }

  state = {};

  render() {
    return <div data-test="component-input">{this.content()}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

// const mapDispatchToProps = {};

export default connect(mapStateToProps, { guessWords })(Input);
