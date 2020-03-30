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
    let choice2 = Math.random();

    if (choice2 >= 0 && choice2 <= 0.33) {
      return (choice2 = " Hex");
    }
    if (choice2 >= 0.34 && choice2 <= 0.66) {
      return (choice2 = " Curse");
    }
    return (choice2 = " Charm");
  }

  setWinner() {
    const choice1 = this.state.userChosenAction;

    const choice2 = Duel.randomComputer();

    const newScore = { ...this.state.score };

    this.setState({
      computerChosenAction: choice2,
    });
    if (choice1 === choice2) {
      this.setState({
        result: "Tie",
        winner: "",
        visible: true,
      });
    } else {
      if (choice1 === "Curse") {
        if (choice2 === "Charm") {
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

      if (choice1 === "Charm") {
        if (choice2 === "Hex") {
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

      if (choice1 === "Hex") {
        if (choice2 === "Charm") {
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
