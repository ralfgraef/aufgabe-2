import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    word: "Huhu",
    chars: 0
  };

  wordCountHandler = event => {
    this.setState({
      word: event.target.value,
      chars: event.target.value.length
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <p>
            You typed {this.state.word} in the input field and the word-length
            is {this.state.chars} characters.
          </p>
          <input type="text" onChange={this.wordCountHandler} />
        </div>
      </div>
    );
  }
}

export default App;
