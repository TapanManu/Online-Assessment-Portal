import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCardFooter } from 'mdbreact';


const Footer = () => {
  return (
    <MDBCardFooter id="container" className="fixed-bottom" color="white" >
        <MDBContainer id='footer'  className='font-medium mt-4 black-text' color="#fff">
          <MDBContainer fluid className='text-center text-md-left'>
            <div className='d-flex flex-row'>
              <div className='d-flex flex-col' md='5'>
                  <div id='examera' className='px-5 py-2'><b>Examera</b></div>

                  <div className='px-3 py-2'>About us</div>
                  <div className='px-3 py-2'>Contact</div>
                  <div className='px-3 py-2'>Pricing</div>
                  <div className='px-3 py-2'>Private Policy</div>
                </div>
            </div>
          </MDBContainer>
          <div id='copyright-container'className='footer-copyright text-center py-3'>
            <MDBContainer  id='copyright' fluid >
              &copy; {new Date().getFullYear()} Copyright:{' '}
              Examera
            </MDBContainer>
          </div>
        </MDBContainer>
    </MDBCardFooter>
  );
};

export default Footer;
