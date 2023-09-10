import { createBrowserRouter } from "react-router-dom"
import { Home } from "../home"


export const routers = createBrowserRouter([
    {
        id: "root",
        path: "/",
        Component: Home,
        children: []
    },
])
