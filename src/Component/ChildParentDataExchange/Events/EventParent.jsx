import EventChild from "./EventChild";

const EventParent = () => {
  window.addEventListener("event-from-child", (event) => {
    console.log(event.detail);
  });
  return (
    <div>
      EventParent
      <EventChild></EventChild>
    </div>
  );
};

export default EventParent;
