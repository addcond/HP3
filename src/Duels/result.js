import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="resultContainer">
        <p>{this.props.resultMessage}</p>
        <p>Opponent use: {this.props.computerChosenAction}</p>
      </div>
    );
  }
}

export default Result;
