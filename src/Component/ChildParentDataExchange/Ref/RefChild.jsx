import { forwardRef, useImperativeHandle, useState } from "react";

const RefChild = (_props, ref) => {
  const [name, setName] = useState("");

  const getTitleFromChild = () => {
    var resp = name;
    setName("");
    return resp;
  };

  useImperativeHandle(ref, () => ({
    getTitleFromChild,
  }));

  return (
    <div className="p-2">
      <h2 className="pb-1">Child Component</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default forwardRef(RefChild);
