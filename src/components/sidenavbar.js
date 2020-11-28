import React from "react";
import { Component } from "react";
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
class SideNav extends Component {
  render() {
    return (
      <div>
        <MDBContainer className="mt-2">
          <MDBRow className="mb-2">
          </MDBRow>
          <MDBRow>
            <MDBCol xl="2" lg="3" md="4" className="mb-md-0 mb-4">
              <div class="btn-grp">
              <MDBBtnGroup vertical className="py-2">
                <MDBBtn color="white" >Previous Tests</MDBBtn>
                <MDBBtn color="white">Subject Tests</MDBBtn>
                <MDBBtn color="white">Chapter Tests</MDBBtn>
                <MDBBtn color="white">Mock Tests</MDBBtn>
                <MDBBtn color="white">Rank List</MDBBtn>
              </MDBBtnGroup>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer align color="#ccc" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBModalFooter>
              <div className="mr-auto">
                <MDBBtn color="#f5f2f2">Tapan Manu</MDBBtn>
              </div>
            </MDBModalFooter>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default SideNav;
