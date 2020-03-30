import React, { Component } from "react";
import Actions from "./actions";
import Score from "./score";
import Result from "./result";

class Duel extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        Duel.randomComputer = Duel.randomComputer.bind(this);
        this.setWinner = this.setWinner.bind(this);

        this.state = {
            userChosenAction: "",
            secondChosenAction: "",
            computerChosenAction: "",
            result: "",
            winner: "",
            score: {
                userScore: 0,
                computerScore: 0,
            },
        };
    }

    handleClick(event) {
        this.setState(
            {
                userChosenAction: event.target.getAttribute("data-action"),
            },
            () => {
                this.setWinner();
            }
        );
    }

    static randomComputer() {
        let secondChoice = Math.random();

        if (secondChoice >= 0 && secondChoice <= 0.33) {
            return (secondChoice = "Hex");
        }
        if (secondChoice >= 0.34 && secondChoice <= 0.66) {
            return (secondChoice = "Curse");
        }
        return (secondChoice = "Charm");
    }

    setWinner() {
        const firstChoice = this.state.userChosenAction;

        const secondChoice = Duel.randomComputer();

        const newScore = { ...this.state.score };

        this.setState({
            computerChosenAction: secondChoice,
        });
        if (firstChoice === secondChoice) {
            this.setState({
                result: "Tie",
                winner: "",
                visible: true,
            });
        } else {
            if (firstChoice === "Curse") {
                if (secondChoice === "Charm") {
                    newScore.userScore = this.state.score.userScore + 1;
                    newScore.computerScore = this.state.score.computerScore;
                    this.setState({
                        result: "You win!",
                        winner: "User",
                        score: newScore,
                        visible: true,
                    });
                } else {
                    newScore.userScore = this.state.score.userScore;
                    newScore.computerScore = this.state.score.computerScore + 1;
                    this.setState({
                        result: "Computer win!",
                        winner: "Computer",
                        score: newScore,
                        visible: true,
                    });
                }
            }

            if (firstChoice === "Charm") {
                if (secondChoice === "Hex") {
                    newScore.userScore = this.state.score.userScore + 1;
                    newScore.computerScore = this.state.score.computerScore;
                    this.setState({
                        result: "You win!",
                        winner: "User",
                        score: newScore,
                        visible: true,
                    });
                } else {
                    newScore.userScore = this.state.score.userScore;
                    newScore.computerScore = this.state.score.computerScore + 1;
                    this.setState({
                        result: "Computer wins!",
                        winner: "Computer",
                        score: newScore,
                        visible: true,
                    });
                }
            }

            if (firstChoice === "Hex") {
                if (secondChoice === "Charm") {
                    newScore.userScore = this.state.score.userScore;
                    newScore.computerScore = this.state.score.computerScore + 1;
                    this.setState({
                        result: "Opponent wins!",
                        winner: "Computer",
                        score: newScore,
                        visible: true,
                    });
                } else {
                    newScore.userScore = this.state.score.userScore + 1;
                    newScore.computerScore = this.state.score.computerScore;
                    this.setState({
                        result: "You win!",
                        winner: "User",
                        score: newScore,
                        visible: true,
                    });
                }
            }
        }
    }

    render() {
        return (
            <div className="game">
                <Score
                    userScore={this.state.score.userScore}
                    computerScore={this.state.score.computerScore}
                />
                <Actions onClick={(event) => this.handleClick(event)} />
                {this.state.visible && (
                    <Result
                        resultMessage={this.state.result}
                        computerChosenAction={this.state.computerChosenAction}
                    />
                )}
            </div>
        );
    }
}

export default Duel;