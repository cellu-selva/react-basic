import { useContext, useState } from "react";
import { C2PProvider } from "../../../Provider/C2PProvider";
import ContextChild from "./ContextChild";

const ContextParent = () => {
  const { name } = useContext(C2PProvider);
  return (
    <div className="flex w-100">
      <div className="w-50">
        <h2>
          Name from Context provider -{" "}
          <i>
            <b>{name}</b>
          </i>
        </h2>
      </div>
      <div className="w-50">
        <ContextChild />
      </div>
    </div>
  );
};

const ContextParentWrapper = () => {
  const [name, setName] = useState();
  return (
    <div>
      <h2>
        <u>Passing data from Child to Parent using Context API:</u>
      </h2>
      <C2PProvider.Provider value={{ name, setName }}>
        <ContextParent />
      </C2PProvider.Provider>
    </div>
  );
};

export default ContextParentWrapper;
