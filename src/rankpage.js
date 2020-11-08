import React from 'react';
import ListGroup from './components/ranklist';
import SideNav from "./components/sidenavbar";
import Footer from "./components/Footer";
import Header from "./components/header";

import './style.css';

export default class RankPage extends React.Component{
    
    render(){
        return(
            <>
            <div class="page-header">
                <Header/>
            </div>
            <div class="parent"> 
                <div class="sidenav">
                    <SideNav/>
                </div>
                <div class="page-wrapper">
                    <div class="rank-wrapper">
                        <div class="rank-header">
                            <h2><b>RANK LIST</b></h2>
                        </div>
                        <div class="ranklist" id="1">
                            <ListGroup/>
                        </div>
                        <div class="ranklist" id="2">
                            <ListGroup/>
                        </div>
                        <div class="ranklist" id="3">
                            <ListGroup/>
                        </div>
                        <div class="ranklist" id="4">
                            <ListGroup/>
                        </div>
                        <div class="ranklist" id="5">
                            <ListGroup/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div class="footer">
                    <Footer/>
                </div>
            </>
            
        );
    }
}