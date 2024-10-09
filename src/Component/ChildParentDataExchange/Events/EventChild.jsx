const EventChild = () => {
  return (
    <div>
      EventChild
      <button
        type="button"
        onClick={() => {
          const event = new CustomEvent("event-from-child", {
            detail: "selva",
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
