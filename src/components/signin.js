import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import examImg from "../images/Exams-bro.png";
import "../style.css";

const Login = () => {
  return (
    <div className="p-sm-5 m-sm-5 text-font">
      <MDBContainer className=" mt-md-5" height="100vh">
        <MDBRow>
          <MDBCol lg="5" className="m-lg-5 p-sm-5 m-3 p-3">
            <img src={examImg} height="100%" width="100%" alt="sign in"></img>
          </MDBCol>
          <MDBCol
            lg="5"
            className="rounded border m-2"
            style={{ backgroundColor: "#D7FFE0" }}
          >
            <div className="py-5 my-5">
            <form className="p-5" height="100%">
              <p className="h3 text-left mb-4" style={{ fontWeight: "bold" }}>
                Sign in
              </p>
              <div className="grey-text">
                <input
                  type="email"
                  className="form-control my-2  border-0"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="form-control my-2  border-0"
                  placeholder="Password"
                />
              </div>
              <div className="text-left py-2">
                <MDBBtn color="green" className="rounded">
                  Sign in
                </MDBBtn>
              </div>
            </form>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
