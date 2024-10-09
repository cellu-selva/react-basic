import { useContext, useState } from "react";
import { C2PProvider } from "../../../Provider/C2PProvider";
import ContextChild from "./ContextChild";

const ContextParent = () => {
  const { name } = useContext(C2PProvider);
  return (
    <div className="flex w-100">
      <div className="w-50">
        Name from Context provider -
        <i>
          <b>{name}</b>
        </i>
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
      Context Parent
      <C2PProvider.Provider value={{ name, setName }}>
        <ContextParent />
      </C2PProvider.Provider>
    </div>
  );
};

export default ContextParentWrapper;
