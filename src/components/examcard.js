import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        
        <MDBCardBody>
          <MDBCardTitle><h3><b>Biology/ Chapter 1</b></h3><h6>Details</h6></MDBCardTitle>
          <MDBCardText>
            <MDBCardImage className="img-fluid" src="" waves /><br></br>
            <text id="date"> 21 August 2020</text><br></br>
            <text id="time"> 10.00 AM</text><br></br>
            <text id="limit"> 2 hours</text><br></br>
            Topics &nbsp;&nbsp;&nbsp;&nbsp;
            <text id="topics">Topic 1</text><br></br>
            Status&nbsp;&nbsp;&nbsp;
            <text id="status"> incomplete</text>
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;