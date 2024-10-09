import { useRef } from "react";

const CbChild = (props) => {
  const { setParentName } = props;
  const inputRef = useRef();
  const handleOnClick = () => {
    setParentName(inputRef.current.value);
  };
  return (
    <div>
      CbChild
      <input type="text" ref={inputRef} />
      <button onClick={handleOnClick}>Update Name</button>
    </div>
  );
};

CbChild.propTypes = {
  setParentName: () => {},
};

export default CbChild;
