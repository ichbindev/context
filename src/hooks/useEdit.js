import { useState, createContext, useContext } from "react";

export const EditContext = createContext();

const useEdit = () => {
  const context = useContext(EditContext);
  return context;
};

export const Editable = (props) => {
  const [edit, setEdit] = useState(false);
  const [isEditable] = useState(props.isEditable);
  console.log(props.children);
  return (
    <EditContext.Provider value={{ edit, setEdit, isEditable }}>
      {props.children}
    </EditContext.Provider>
  );
};

export default useEdit;
