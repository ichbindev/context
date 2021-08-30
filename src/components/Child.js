import React from "react";
import Grandchild from './Grandchild';
import useEdit from '../hooks/useEdit';

export function Child(props) {
  const { edit, setEdit, isEditable } = useEdit();

  return (
    <div>
      Child <br/>
      {isEditable && <button onClick={() => setEdit(!edit)}>Edit</button>}
      <Grandchild />
    </div>
  );
}

export default Child;
