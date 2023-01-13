import React from "react";
import "../../../App.css";
import Run from "./Button_page/RUN/Run";
import Code_input from "./Code/Code";
function Input_page() {
  return (
    <div className="Input">
      <Code_input />
      <Run />
    </div>
  );
}

export default Input_page;
