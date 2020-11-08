import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";

const ListGroupPage = () => {
return (
<MDBContainer>
  <MDBListGroup style={{ width: "50rem" }}>
    <MDBListGroupItem className="d-flex justify-content-between align-items-center">
            <text align="left">1</text>
            <text align="center">Tapan Manu 180180</text>
            <text align="right">50/50</text>
        <MDBBadge color="primary"
        pill>14</MDBBadge>
    </MDBListGroupItem>
    
  </MDBListGroup>
</MDBContainer>
);
};

export default ListGroupPage;