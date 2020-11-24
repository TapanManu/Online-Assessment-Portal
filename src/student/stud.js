import React from "react";
import Report from "../components/Report.js";
import Footer from "../components/Footer.js";
import Header from "../components/header.js";
import hari_component from "../exampage";
import DashBoard from "./dashboard.js";

import notfound from '../components/pagenotfound';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import {
  MDBBtn,
  MDBBtnGroup,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBFooter,
  MDBCardFooter,
  MDBModalFooter,
} from "mdbreact";

import "../style.css";
import RankPage from "../rankpage.js";

export default class Student extends React.Component {
  render() {
    return (
      <Router style={{ overflow: "hidden" }}>
        <div class="page-header">
          <Header />
        </div>
        <div class="parent">
          <div class="sidenav">
            <MDBContainer className="mt-2">
              <MDBRow className="mb-2"></MDBRow>
              <MDBRow>
                <MDBCol xl="2" lg="3" md="4" className="mb-md-0 mb-4">
                  <div class="btn-grp">
                    <MDBBtnGroup vertical className="py-2">
                      <Link to="/test/dashboard">
                        <MDBBtn color="white">DashBoard</MDBBtn>
                      </Link>
                      <Link to="/tests/examresults">
                        <MDBBtn color="white">Exam Results</MDBBtn>
                      </Link>
                      <Link to="/tests/availableexams">
                        <MDBBtn color="white">Available Exams</MDBBtn>
                      </Link>
                      <Link to="/tests/ranklist">
                        <MDBBtn color="white">Rank List</MDBBtn>
                      </Link>
                    </MDBBtnGroup>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer align color="#ccc" className="font-small pt-4 mt-4">
              <div className="footer-copyright text-center py-3">
                <MDBModalFooter>
                  <div className="mx-auto">
                    <MDBBtn color="#f5f2f2">Tapan Manu</MDBBtn>
                  </div>
                </MDBModalFooter>
              </div>
            </MDBContainer>
          </div>
          <div class="results-page-wrapper">
            <div class="rank-wrapper">
              <div class="rank-header">
                <h2>
                  <b>EXAM RESULTS</b>
                </h2>
              </div>
              <div class="result-list" id="1">
                <Route exact path="/test/dashboard" component={DashBoard} />
                <Route exact path="/tests/examresults" component={Report} />
                <Route exact path="/tests/Chapter" component={notfound} />
                <Route exact path="/tests/availableexams" component={hari_component} />
                <Route exact path="/tests/ranklist" component={RankPage} />
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <Footer />
        </div>
      </Router>
    );
  }
}
