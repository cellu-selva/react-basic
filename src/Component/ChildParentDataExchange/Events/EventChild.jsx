import { useState } from "react";

const EventChild = () => {
  const [data, setData] = useState("Default value");
  return (
    <div className="mb-1">
      <h2>Child Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      ></input>
      <button
        type="button"
        onClick={() => {
          const event = new CustomEvent("event-from-child", {
            detail: data,
          });
          window.dispatchEvent(event);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default EventChild;
