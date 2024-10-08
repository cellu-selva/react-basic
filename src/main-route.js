import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Parent from "./Component/ChildParentDataExchange/Parent";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Dashboard,
        children: [{
            path: 'child-parent-data',
            Component: Parent
        }]
    }
])