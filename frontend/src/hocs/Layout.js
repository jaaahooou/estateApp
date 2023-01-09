import React from "react";
import Navbar from "../components/Navbar";

const layout = (props) => (
  <div>
    <Navbar />

    <div>{props.children}</div>
  </div>
);

export default layout;
