import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CbParent from "./Component/ChildParentDataExchange/callback/CbParent.jsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Dashboard,
        children: [{
            path: 'child-parent-data',
            Component: CbParent
        }]
    }
])