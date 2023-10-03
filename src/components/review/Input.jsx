import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const Input = ({ name, val, setVal }) => {
  const [read, setRead] = useState(true);
  const [edit, setEdit] = useState("bg-secondaryBackground");

  const handleClick = () => {
    setRead(!read);

    if (edit == "bg-primaryLightBackground") {
      setEdit("bg-secondaryBackground");
    } else {
      setEdit("bg-primaryLightBackground");
    }
  };

  return (
    <div className="flex gap-10">
      <p className="w-[200px]">{name}</p>
      <input
        type="text"
        className={`${edit} w-[400px] p-2`}
        readOnly={read}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        required
      />
      <button onClick={handleClick} className="text-primary">
        <FiEdit2 />
      </button>
    </div>
  );
};

export default Input;
