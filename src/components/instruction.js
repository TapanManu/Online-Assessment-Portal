import React from "react";
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBInput } from "mdbreact";
// import classes from "*.module.css";
import { Component } from "react";

class DocumentInput extends React.Component {
  render() {
    return (
      <MDBInput
        className="m-2"
        width="100%"
        type="text"
        name={`instruction-${this.props.index}`}
        label={`Instruction ${this.props.index}`}
        outline
      />
    );
  }
}

class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
    };
    this.add = this.add.bind(this);
  }
  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });
  }
  render() {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={index} index={index}></Element>;
    });
    return (
      <MDBContainer className="p-3">
        <p className="h1-responsive">Instructions</p>
        <div>
          <form>
            <MDBCol md="6">{documents}</MDBCol>
          </form>
        </div>
        <MDBRow>
          <MDBCol md="6" className="text-right">
            <MDBBtn size="md" color="green rounded " onClick={this.add}>
              Add instruction
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6" className="text-center">
            <MDBBtn size="md" color="green rounded ">
              Submit
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Instruction;
