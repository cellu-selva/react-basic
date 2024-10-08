import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CbParent from "./Component/ChildParentDataExchange/callback/CbParent.jsx";
import StateParent from "./Component/ChildParentDataExchange/StateShifting/StateParent.jsx";
import RefParent from "./Component/ChildParentDataExchange/Ref/RefParent.jsx";

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
    ],
  },
]);
