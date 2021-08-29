import React from "react";
import Child from "./Child";
import { Editable } from "../hooks/useEdit";

export function Parent(props) {

  return (
    <div className="parent">
      <Editable>
        Parent
        <Child />
      </Editable>
    </div>
  );
}

export default Parent;
