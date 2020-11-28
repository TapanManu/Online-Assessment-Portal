import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {  MDBNav,MDBNavLink,MDBIcon } from "mdbreact";

export default class Header extends React.Component{
    
    render(){
        return(
            <>
            <div class="header">
            <BrowserRouter>

                <MDBNav className="p-sm-3" style={{backgroundColor:"#fff"}}>
                <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="home" className="mr-sm-2"/>Home</MDBNavLink>
                <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="bell" className="mr-sm-2"/>Notifications</MDBNavLink>
                <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="cog" className="mr-sm-2"/>Settings</MDBNavLink>
                <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="sign-out-alt" className="mr-sm-2"/>Logout</MDBNavLink>
                </MDBNav>
            </BrowserRouter>
            </div>
            </>
        );
    }
}