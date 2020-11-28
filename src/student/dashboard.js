import React from "react";


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
import Report from '../components/Report';

export default class DashBoard extends React.Component {
  render() {
    return (
        <div class="parent-welcome">
            <div class="welcome">
                Hi Amjad!
            </div>
            <div class="result-welcome">
                <Report/>
            </div>
        </div>
          
    );
  }
}
