import { useContext } from "react";
import { C2PProvider } from "../../../Provider/C2PProvider";

const ContextChild = () => {
  const { name, setName } = useContext(C2PProvider);
  return (
    <div className="m-2">
      <i>
        <h2>
          Name from the context - <b>{name}</b>
        </h2>
      </i>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default ContextChild;
