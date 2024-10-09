import { forwardRef, useImperativeHandle, useState } from "react";

const RefChild = (_props, ref) => {
  const [name, setName] = useState("");

  const getTitleFromChild = () => {
    return name;
  };

  useImperativeHandle(ref, () => ({
    getTitleFromChild,
  }));

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default forwardRef(RefChild);
