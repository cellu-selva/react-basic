import { useState } from "react";
import CbChild from "./CbChild";

const CbParent = () => {
  const [parentName, setParentName] = useState("Parent");
  const cb = (data) => {
    setParentName(data);
  };
  return (
    <div>
      Title - {parentName}
      <CbChild setParentName={cb} />
    </div>
  );
};

export default CbParent;
