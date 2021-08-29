import { useState, createContext, useContext } from "react";

export const EditContext = createContext();

const useEdit = () => {
  const context = useContext(EditContext);
  return context;
};

export const Editable = (props) => {
  const [edit, setEdit] = useState(null);
  console.log(props.children);
  return (
    <EditContext.Provider value={{ edit, setEdit }}>
      {props.children}
    </EditContext.Provider>
  );
};

export default useEdit;
