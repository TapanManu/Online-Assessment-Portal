import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './footer.css';

const Footer = () => {
  return (
    <MDBContainer id="container" className='mw-80'>
        <MDBFooter id='footer' color='#f5fcff' className='font-medium pt-3 mt-4 black-text'>
          <MDBContainer fluid className='text-center text-md-left'>
            <div className='d-flex flex-row'>
              <div className='d-flex flex-col' md='5'>
                  <div id='examera' className='px-5 py-2'>Examera</div>

                  <div className='px-5 py-2'>About us</div>
                  <div className='px-5 py-2'>Contact</div>
                  <div className='px-5 py-2'>Pricing</div>
                  <div className='px-5 py-2'>Private Policy</div>
                </div>
            </div>
          </MDBContainer>
          <div id='copyright-container'className='footer-copyright text-center py-3'>
            <MDBContainer  id='copyright' fluid >
              &copy; {new Date().getFullYear()} Copyright:{' '}
              Examera
            </MDBContainer>
          </div>
        </MDBFooter>
    </MDBContainer>
  );
};

export default Footer;
