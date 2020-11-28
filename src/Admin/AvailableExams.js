import React from "react";
import ExamDetail from "./ExamDetails";

import "./style.css";

export default class RankPage extends React.Component {
  render() {
    return (
      <div class="parent">
        <div class="rank-wrapper mx-auto">
          <div class="rank-header">
            <h2 className="my-2">
              <b>All Exams</b>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ExamDetail />
            </div>
            <div className="col-lg-4">
              <ExamDetail />
            </div>
            <div className="col-lg-4">
              <ExamDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
