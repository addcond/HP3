import React, { Component } from "react";

class Score extends Component {
    render() {
        return (
            <div className="score">
                <h3>Score</h3>
                <div>
                    <div className="score-titles">You</div>
                    <div className="score-computer">Opponent</div>
                </div>
                <div>
                    <div className="scoreUser"> {this.props.userScore} : </div>
                    <div className="scoreComp">{this.props.computerScore} </div>
                </div>
            </div>
        );
    }
}

export default Score;