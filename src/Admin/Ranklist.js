import React from "react";
import ListGroup from "./RankList-component";

import "./style.css";

export default class RankPage extends React.Component {
  render() {
    return (
      <div class="parent">
        <div class="rank-wrapper mx-auto">
          <div class="rank-header">
            <h2 className="my-2">
              <b>Rank List</b>
            </h2>
          </div>
          <div>
            <ListGroup className="col-12"/>
            <ListGroup />
            <ListGroup />
            <ListGroup />
            <ListGroup />
          </div>
        </div>
      </div>
    );
  }
}
