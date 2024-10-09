import { useContext } from "react";
import { C2PProvider } from "../../../Provider/C2PProvider";

const ContextChild = () => {
  const { name, setName } = useContext(C2PProvider);
  return (
    <div>
      Name from the context -
      <i>
        <b>{name}</b>
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
