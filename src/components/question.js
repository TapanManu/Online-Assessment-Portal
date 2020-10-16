import React from "react";
import { Component } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";
class QuestionCard extends Component {
  render() {
    return (
      <div className="m-5 p-5" style={{ backgroundColor: "white" }}>
        <h4>Question</h4>
        <MDBRow>
          <MDBCol>
            <MDBInput hint="Question Number" type="number" outline />
          </MDBCol>
          <MDBCol className="mt-4">
            <input
              type="file"
              className="rounded custom-file-input"
              id="file1"
            />
            <label className="custom-file-label" htmlFor="file1">
              Question file
            </label>
          </MDBCol>
        </MDBRow>
        <h4>Options</h4>
        <MDBRow>
          <MDBCol>
            <MDBInput hint="Question 1" type="text" outline />
          </MDBCol>
          <MDBCol className="mt-4">
            <input
              type="file"
              className="rounded custom-file-input"
              id="file1"
            />
            <label className="custom-file-label" htmlFor="file1">
              Choose file
            </label>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput hint="Question 2" type="text" outline />
          </MDBCol>
          <MDBCol className="mt-4">
            <input
              type="file"
              className="rounded custom-file-input"
              id="file1"
            />
            <label className="custom-file-label" htmlFor="file1">
              Choose file
            </label>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput hint="Question 3" type="text" outline />
          </MDBCol>
          <MDBCol className="mt-4">
            <input
              type="file"
              className="rounded custom-file-input"
              id="file1"
            />
            <label className="custom-file-label" htmlFor="file1">
              Choose file
            </label>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput hint="Question 4" type="text" outline />
          </MDBCol>
          <MDBCol className="mt-4">
            <input
              type="file"
              className="rounded custom-file-input"
              id="file1"
            />
            <label className="custom-file-label" htmlFor="file1">
              Choose file
            </label>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput hint="Question 4" type="text" outline />
          </MDBCol>
          <MDBCol className="mt-4">
            <input
              type="file"
              className="rounded custom-file-input"
              id="file1"
            />
            <label className="custom-file-label" htmlFor="file1">
              Choose file
            </label>
          </MDBCol>
        </MDBRow>
        <div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <p>Correct options : </p>
          </div>
          {/* Default inline 1 */}
          <div class="custom-control custom-checkbox custom-control-inline">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultInline1"
            ></input>
            <label class="custom-control-label" for="defaultInline1">
              1
            </label>
          </div>

          {/* Default inline 2 */}
          <div class="custom-control custom-checkbox custom-control-inline">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultInline2"
            ></input>
            <label class="custom-control-label" for="defaultInline2">
              2
            </label>
          </div>

          {/* Default inline 3 */}
          <div class="custom-control custom-checkbox custom-control-inline">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultInline3"
            ></input>
            <label class="custom-control-label" for="defaultInline3">
              3
            </label>
          </div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultInline4"
            ></input>
            <label class="custom-control-label" for="defaultInline4">
              4
            </label>
          </div>
        </div>
        <div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <p>Marks : 4</p>
          </div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <MDBBtn style={{ float: "right" }} color="success">
              SUBMIT QUESTION
            </MDBBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
