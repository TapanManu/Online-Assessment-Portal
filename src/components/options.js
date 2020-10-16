import React from "react";
import { Component } from "react";
class QuestionCard extends Component {
  render() {
    return (
      <div>
        <h1>Questions</h1>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>
        ;
      </div>
    );
  }
}

export default QuestionCard;
