import { ReactNode } from "react"

import { IBreadcrumb } from "../breadcrumb/interface"


export interface ISubMenu {
    title: string,
    icon: ReactNode,
    to: string,
    open: boolean,
    breadcrumbs: Array<IBreadcrumb>,
    handleOpen: (open: boolean) => void,
}
