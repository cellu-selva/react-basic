import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CbParent from "./Component/ChildParentDataExchange/callback/CbParent.jsx";
import StateParent from "./Component/ChildParentDataExchange/StateShifting/StateParent.jsx";
import RefParent from "./Component/ChildParentDataExchange/Ref/RefParent.jsx";
import EventParent from "./Component/ChildParentDataExchange/Events/EventParent.jsx";
import ContextParent from "./Component/ChildParentDataExchange/ContextApi/ContextParent.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        path: "child-parent-cb",
        Component: CbParent,
      },
      {
        path: "child-parent-ss",
        Component: StateParent,
      },
      {
        path: "child-parent-ref",
        Component: RefParent,
      },
      {
        path: "child-parent-event",
        Component: EventParent,
      },
      {
        path: "child-parent-context",
        Component: ContextParent,
      },
      {
        path: "child-parent-redux",
        Component: ContextParent,
      },
    ],
  },
]);
