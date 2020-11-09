import React from "react";
import {
  Bar,
  Bubble,
  Doughnut,
  HorizontalBar,
  Line,
  Pie,
  Polar,
  Radar,
  Scatter,
  Chart,
} from "react-chartjs-2";
import { MDBContainer, MDBRow,MDBCol, MDBCardBody } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import "./Pie.css";

// Pie Chart
const dataPie = {
  labels: ["Correct", "Not correct"],
  datasets: [
    {
      data: [300, 73],
      backgroundColor: [
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#949FB1",
        "#4D5360",
        "#ac64ad",
      ],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774",
        "#da92db",
      ],
    },
  ],
};

const Report = () => {
  return (
    <div class="report">
      
    <MDBCardBody>
      <MDBRow>
        <MDBCol>
          <div id="perc">
            <SectionContainer header="Percentage">
              <Pie
                data={dataPie}
                options={{ responsive: true, aspectRatio: 3 }}
              />
            </SectionContainer>
          </div>
        </MDBCol>
        <MDBCol>
          <div id="phy">
            <SectionContainer header="Physics">
              <Pie
                data={dataPie}
                options={{ responsive: true, aspectRatio: 3 }}
              />
            </SectionContainer>
          </div>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol>
          <div id="chem">
            <SectionContainer header="Chemistry">
              <Pie
                data={dataPie}
                options={{ responsive: true, aspectRatio: 3 }}
              />
            </SectionContainer>
          </div>
        </MDBCol>
        <MDBCol>
          <div id="bio">
            <SectionContainer header="Biology">
              <Pie
                data={dataPie}
                options={{ responsive: true, aspectRatio: 3 }}
              />
            </SectionContainer>
          </div>
        </MDBCol>
      </MDBRow>
      <hr />
    </MDBCardBody>
    </div>
  );
};

export default Report;
