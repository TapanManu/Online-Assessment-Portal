import React from "react";
import { Component } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBFooter,
} from "mdbreact";
class SideNav extends Component {
  render() {
    return (
      <div>
        <MDBContainer className="mt-2">
          <MDBRow className="mb-2">
            <MDBCol md="2">
              <img
                src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
                className="img-fluid"
                alt=""
              />
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBCol xl="2" lg="3" md="4" className="mb-md-0 mb-4">
              <MDBBtnGroup vertical>
                <MDBBtn color="blue">Previous Tests</MDBBtn>
                <MDBBtn color="blue">Subject Tests</MDBBtn>
                <MDBBtn color="blue">Chapter Tests</MDBBtn>
                <MDBBtn color="blue">Mock Tests</MDBBtn>
                <MDBBtn color="blue">Rank List</MDBBtn>
              </MDBBtnGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBFooter align color="white" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer>
              <div className="mx-auto">
                <MDBBtn color="green">Tapan Manu</MDBBtn>
              </div>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default SideNav;
