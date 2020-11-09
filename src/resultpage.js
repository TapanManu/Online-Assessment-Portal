import React from 'react';
import Report from './components/Report.js';
import SideNav from "./components/sidenavbar";
import Footer from "./components/Footer";
import Header from "./components/header";

import './style.css';

export default class Result extends React.Component{
    
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
                <div class="results-page-wrapper">
                    <div class="rank-wrapper">
                        <div class="rank-header">
                            <h2><b>EXAM RESULTS</b></h2>
                        </div>
                        <div class="result-list" id="1">
                            <Report />
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