import { useState } from "react";
import StateChild from "./StateChild";

const StateParent = () => {
  const [parentName, setParentName] = useState("Parent");
  return (
    <div>
      <h3>
        Title - <i>{parentName}</i>
      </h3>
      <StateChild setParentName={setParentName} />
    </div>
  );
};

export default StateParent;
