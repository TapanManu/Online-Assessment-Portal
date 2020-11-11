import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import "./style.css";

import registerServiceWorker from "./registerServiceWorker";
// import Signup from "./components/signup";
// import Instruction from "./components/instruction";
<<<<<<< HEAD
import QuestionCard from "./components/question";
// import SideNav from "./components/sidenavbar";
ReactDOM.render(<QuestionCard />, document.getElementById("root"));
=======
// import QuestionCard from "./components/question";
//import SideNav from "./components/sidenavbar";
import RankPage from './rankpage';
//ReactDOM.render(<RankPage/>, document.getElementById("root"));
import Result from "./resultpage";
import SideNav from "./components/sidenavbar";
ReactDOM.render(<Result />, document.getElementById("root"));
>>>>>>> 62d71fd443b7a0da16db242e3b7031440f1f780a

registerServiceWorker();
