import { useRef, useState } from "react";
import RefChild from "./RefChild";

function RefParent() {
  const childRef = useRef(null);
  const [data, setData] = useState();
  const handleClick = () => {
    if (childRef.current) {
      setData(childRef.current.getTitleFromChild()); // Access child method
    }
  };

  return (
    <div className="flex">
      <div className="p-2">
        <h2 className="pb-1">Parent Component</h2>
        <button onClick={handleClick}>Get Child Data</button>
        <h5>Data From Child: </h5>{" "}
        <h3>
          <i>{data}</i>
        </h3>
      </div>
      <div className="">
        <RefChild ref={childRef} />
      </div>
    </div>
  );
}

export default RefParent;
