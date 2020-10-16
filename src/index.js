import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import registerServiceWorker from './registerServiceWorker';
// import Signup from "./components/signup";
import Instruction from "./components/instruction";

ReactDOM.render( <Instruction /> , document.getElementById('root'));

registerServiceWorker();