import React, { Component } from "react";
import PropTypes from "prop-types";

// export default Congrats = ({ success }) => {
//   return (
//     <div data-test="congrats-component">
//       <p data-test="congrats-message">{success ? "Congrats!" : ""}</p>
//     </div>
//   );
// };

/**
 * In this example, we are using a class component,
 * but the same functionality could also be applied to
 * function components, or components created by React.memo or React.forwardRef.
 */

export default class Congrats extends Component {
  render() {
    const { success } = this.props;
    return (
      <div data-test="congrats-component" className="notification is-primary">
        <p data-test="congrats-message">
          {success ? "Congrats! You guess the word!" : ""}
        </p>
      </div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool,
};
