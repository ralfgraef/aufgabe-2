import React, { Component } from "react";
import "./App.css";
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangeHandler = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    console.log("text vor splice: ", text);
    text.splice(index, 1);
    console.log("textnach splice: ", text);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    let charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div className="App">
        <div>
          <p>
            You typed {this.state.userInput} in the input field and the
            word-length is {this.state.chars} characters.
          </p>
          <input
            type="text"
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
          />
        </div>
        <Validation textLength={this.state.chars} />
        {charList}
      </div>
    );
  }
}

export default App;
