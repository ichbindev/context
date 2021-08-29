import React from "react";
import GreatGrandchild from "./GreatGrandchild";

function Grandchild(props) {
  return (
    <div>
      Grandchild
      <GreatGrandchild />
      <GreatGrandchild />
      <GreatGrandchild />
    </div>
  );
}

export default Grandchild;
