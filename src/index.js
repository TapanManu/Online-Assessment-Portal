import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import "./style.css";

import registerServiceWorker from "./registerServiceWorker";
import AdminHome from "./Admin/AdminHome";
ReactDOM.render(<AdminHome />, document.getElementById("root"));

registerServiceWorker();
