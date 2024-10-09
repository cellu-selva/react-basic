import { useRef } from "react";

const StateChild = (props) => {
  const { setParentName } = props;
  const inputRef = useRef();
  const handleOnClick = () => {
    setParentName(inputRef.current.value);
  };
  return (
    <div>
      StateChild
      <input type="text" ref={inputRef} />
      <button onClick={handleOnClick}>Update Name</button>
    </div>
  );
};

StateChild.propTypes = {
  setParentName: () => {},
};

export default StateChild;
