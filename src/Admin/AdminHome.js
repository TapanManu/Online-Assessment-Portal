import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import AddExam from "./AddExam";
import AvailableExams from "./AvailableExams";
import RankList from "./Ranklist";
import SideNav from './SideNav';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import {
  MDBBtn,
  MDBBtnGroup,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBModalFooter,
} from "mdbreact";

import "../style.css";

export default class Result extends React.Component {
  render() {
    return (
      <Router style={{ overflow: "hidden",height:"100vh" }}>
        <div class="page-header fixed-top" style={{}}>
          <Header />
        </div>
        <div class="parent pt-4 mt-5">
          <div class="sidenav" style={{position:"relative",height:"50em"}}>
            <SideNav/>
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
            <div class="rank-wrapper" style={{minHeight:"100vh",height:"100%"}}>
              <div class="result-list" id="1">
                <Route exact path="/Admin/AddExam" component={AddExam} />
                <Route exact path="/Admin/Exams" component={AvailableExams} />
                <Route exact path="/Admin/RankList" component={RankList} />
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
