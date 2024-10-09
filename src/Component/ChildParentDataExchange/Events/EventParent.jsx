import { useState } from "react";
import EventChild from "./EventChild";

const EventParent = () => {
  const [data, setData] = useState();
  window.addEventListener("event-from-child", (event) => {
    console.log(event.detail);
    setData(event.detail);
  });
  return (
    <div className="m-2">
      <h2>
        <u>Data exchange between child to parent using Events:</u>
      </h2>
      <EventChild></EventChild>
      <h2>Parent Component</h2>
      <div>
        Data from Child is ::
        <h3>
          <i>{data}</i>
        </h3>
      </div>
    </div>
  );
};

export default EventParent;
