import React from "react";
import { Component } from "react";
class QuestionCard extends Component {
  render() {
    return (
      <div>
        <h1>Questions</h1>
        <input
          type="email"
          className="form-control"
          placeholder="Your e-mail"
        />
      </div>
    );
  }
}

export default QuestionCard;
