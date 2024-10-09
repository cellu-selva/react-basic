import { createBrowserRouter } from "react-router-dom";
import CbParent from "./Component/ChildParentDataExchange/callback/CbParent.jsx";
import ContextParent from "./Component/ChildParentDataExchange/ContextApi/ContextParent.jsx";
import EventParent from "./Component/ChildParentDataExchange/Events/EventParent.jsx";
import { ReduxC2PWrapper } from "./Component/ChildParentDataExchange/Redux/ReduxParent.jsx";
import RefParent from "./Component/ChildParentDataExchange/Ref/RefParent.jsx";
import StateParent from "./Component/ChildParentDataExchange/StateShifting/StateParent.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

const C2PRouteMenu = [
  {
    to: "child-parent-cb",
    name: "Child to Parent - Cb",
  },
  {
    to: "child-parent-ss",
    name: "to Parent - State Shifting",
  },
  {
    to: "child-parent-ref",
    name: "Child to Parent - Ref",
  },
  {
    to: "child-parent-event",
    name: "Child to Parent - Event",
  },
  {
    to: "child-parent-context",
    name: "Child to Parent - Context",
  },
  {
    to: "child-parent-redux",
    name: "Child to Parent - Redux",
  },
];

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard menus={C2PRouteMenu} />,
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
        Component: ReduxC2PWrapper,
      },
    ],
  },
]);
