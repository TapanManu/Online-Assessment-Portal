/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBBtn, MDBNav,MDBNavLink, MDBCol, MDBRow, MDBContainer, MDBView, MDBIcon } from "mdbreact";

class ExameraPage extends Component{
render() {
  return (
    
    <MDBContainer className="mt-5">
       <BrowserRouter>

<MDBNav className="p-sm-3 mb-3" style={{backgroundColor:"#eeeeee"}}>
  <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="home" className="mr-sm-2"/>Home</MDBNavLink>
  <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="bell" className="mr-sm-2"/>Notifications</MDBNavLink>
  <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="cog" className="mr-sm-2"/>Settings</MDBNavLink>
  <MDBNavLink to="#!" className="mx-auto" style={{color:"black"}}><MDBIcon icon="sign-out-alt" className="mr-sm-2"/>Logout</MDBNavLink>
</MDBNav>
</BrowserRouter>
      <p className="font-weight-bold">Exam Name/Question1</p>
       <p className="float-right">Mark 4</p>
      <MDBRow className="p-sm-2 mt-sm-4">
        <MDBCol size="8">
        <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
        Donec sed odio operae,
        eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
        purus sit amet fermentum.</p>
        <MDBView waves>
              <img src="https://d10lpgp6xz60nq.cloudfront.net/q-thumbnail/3912984.png" className="img-fluid" alt="Sample Question Image" />
            </MDBView>
    </MDBCol> 
        <MDBCol size="4">
          <div>
          
          <center>
      <div class="custom-control custom-checkbox p-sm-3" onClick={this.onChange} >
        <input type="checkbox" class="custom-control-input" style={{backgroundColor:"green !important"}} id="op1"></input>
        <label class="custom-control-label" for="op1">Option1</label>
        </div>
        <div class="custom-control custom-checkbox p-sm-3">
        <input type="checkbox" class="custom-control-input" id="op2"></input>
        <label class="custom-control-label" for="op2">Option2</label>
        </div>
        <div class="custom-control custom-checkbox p-sm-3">
        <input type="checkbox" class="custom-control-input" id="op3"></input>
        <label class="custom-control-label" for="op3">Option3</label>
        </div>
        <div class="custom-control custom-checkbox p-sm-3">
        <input type="checkbox" class="custom-control-input" id="op4"></input>
        <label class="custom-control-label" for="op4">Option4</label>
        </div>
        <MDBBtn outline color="primary" className="m-sm-4" style={{backgroundColor:"yellow", color:"black", border:"success"}}>Save Answer</MDBBtn>
        </center>
        <div class="m-sm-3 text-center" style={{position: "", bottom: "0"}}>
        <MDBBtn outline color="success">
        <MDBIcon icon="arrow-left" className="mr-sm-1" /> Prev
      </MDBBtn>
      <MDBBtn outline color="success" style={{color:"black"}}>
        Next <MDBIcon icon="arrow-right" className="ml-sm-1 " />
      </MDBBtn>
      </div>
      </div>
        </MDBCol>
        
      </MDBRow>
     
    </MDBContainer>
  );
}
}

export default ExameraPage;




// d7ffe0
