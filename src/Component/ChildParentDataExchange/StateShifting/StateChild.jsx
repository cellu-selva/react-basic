import { useRef } from "react";

const StateChild = (props) => {
  const { setParentName } = props;
  const inputRef = useRef();
  const handleOnClick = () => {
    setParentName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="m-2">
      <div className="mb-1">Passing props from Child to parent</div>
      <input type="text" ref={inputRef} />
      <button onClick={handleOnClick}>Update Name</button>
    </div>
  );
};

StateChild.propTypes = {
  setParentName: () => {},
};

export default StateChild;
