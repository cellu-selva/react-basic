import { useRef } from "react";

const CbChild = (props) => {
  const { setParentName } = props;
  const inputRef = useRef();
  const handleOnClick = () => {
    setParentName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="m-2">
      <div className="mb-1">Passing child data to parent using callback</div>
      <input type="text" ref={inputRef} />
      <button onClick={handleOnClick}>Update Name</button>
    </div>
  );
};

CbChild.propTypes = {
  setParentName: () => {},
};

export default CbChild;
