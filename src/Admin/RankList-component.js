import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";

const ListGroupPage = () => {
return (
<MDBContainer>
  <MDBListGroup>
    <MDBListGroupItem className="d-flex my-2 justify-content-between align-items-center">
            <text align="left" className=" mx-5">1</text>
            <text align="center" className=" mx-5">Tapan Manu 180180</text>
            <text align="right" className=" mx-5">50/50</text>
        <MDBBadge color="primary"
        pill>14</MDBBadge>
    </MDBListGroupItem>
    
  </MDBListGroup>
</MDBContainer>
);
};

export default ListGroupPage;