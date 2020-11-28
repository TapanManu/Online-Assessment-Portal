import React from "react";
import { Component } from "react";
import { MDBBtn, MDBBtnGroup, MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class SideNav extends Component {
  render() {
    return (
      <div>
        <MDBContainer className="mt-2">
          <MDBRow className="mb-3"></MDBRow>
          <MDBRow>
            <MDBCol xl="4" lg="4" md="4" className="mb-md-0 mb-4">
              <div class="btn-grp">
                <MDBBtnGroup vertical className="py-1">
                  <Link to="/Admin/AddExam">
                    <MDBBtn color="white">Generate Exam</MDBBtn>
                  </Link>
                  <Link to="/Admin/Exams">
                    <MDBBtn color="white">View Exams</MDBBtn>
                  </Link>
                  <Link to="/Admin/RankList">
                    <MDBBtn color="white">Rank List</MDBBtn>
                  </Link>
                </MDBBtnGroup>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default SideNav;
