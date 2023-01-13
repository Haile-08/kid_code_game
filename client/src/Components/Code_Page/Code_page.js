import React from "react";
import "../../App.css";
import Button_page from "./Button_page/Button_page";
import Input_page from "./Code_input_page/Input_page";

function Code_page() {
  return (
    <div className="Code">
      <Input_page />
      <Button_page />
    </div>
  );
}

export default Code_page;
