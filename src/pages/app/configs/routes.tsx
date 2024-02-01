import { createBrowserRouter } from "react-router-dom"

import { Home } from "../../home"
import { DetailCompany, EditCompany } from "../../company"
import { PointMarking } from "../../point_marking"
import { Dashboard } from "../../dashboard"


export const routers = createBrowserRouter([{
    id: "root",
    path: "/",
    Component: Home,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/registrations/company',
            children: [
                {
                    
                    path: '/registrations/company/detail',
                    element: <DetailCompany />,
                },
                {
                    path: '/registrations/company/update',
                    element: <EditCompany />,
                }
            ]
        },
        {
            path: '/point_marking',
            element: <PointMarking />
        },
    ]
}])
