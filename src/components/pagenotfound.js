import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";

const PageNotFound = () => {
return (
<MDBContainer>
  <MDBCard style={{ width: "100", marginTop: "10rem" }}>
    <MDBCardBody>
      <MDBCardTitle><h1><b>&nbsp;&nbsp;&nbsp;&nbsp;404</b></h1></MDBCardTitle>
      <MDBCardText>
        &nbsp;Page not found !!!
      </MDBCardText>
      <a href="http://www.google.co.in"><MDBBtn color="deep-orange">Back to Homepage</MDBBtn></a>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
);
};

export default PageNotFound;