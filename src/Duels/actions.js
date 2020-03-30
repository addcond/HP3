import React, { Component } from "react";

class Actions extends Component {
  render() {
    return (
      <div className="actionContainer">
        <span
          onClick={this.props.onClick}
          data-action="Curse"
          className="symbol"
        >
            Curse
        </span>
        <span
            onClick={this.props.onClick}
            data-action="Hex"
            className="symbol">
            Hex
        </span>
        <span
          onClick={this.props.onClick}
          data-action="Charm"
          className="symbol"
        >
            Charm
        </span>
      </div>
    );
  }
}

export default Actions;
