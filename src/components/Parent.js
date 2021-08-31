import React from "react";
import Child from "./Child";
import { Editable } from "../hooks/useEdit";

export function Parent({ isEditable }) {
  return (
    <div className="parent container">
      <Editable isEditable={isEditable}>
        Parent
        <Child />
      </Editable>
    </div>
  );
}

export default Parent;
