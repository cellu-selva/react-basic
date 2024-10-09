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
      <div className="m-1">
        <h1>Parent Component</h1>
        <button onClick={handleClick}>Get Child Data</button>
        <br />
        <br />
        Data From Child - {data}
      </div>
      <div className="m-1">
        <RefChild ref={childRef} />
      </div>
    </div>
  );
}

export default RefParent;
