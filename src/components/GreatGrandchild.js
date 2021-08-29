import React from "react";
import useEdit from "../hooks/useEdit";

function Greatgrandchild(props) {
  const { edit } = useEdit();
  return (
    <div>
      {edit ? "Editing " : "Not Editing "}
    </div>
  );
}

export default Greatgrandchild;
