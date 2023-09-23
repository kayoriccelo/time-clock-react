import { ReactNode } from "react"

import { IBreadcrumb } from "../../../core/breadcrumb/interfaces"


export interface IMenu {
    title: string,
    icon: ReactNode,
    to?: string,
    open: boolean,
    breadcrumbs?: Array<IBreadcrumb>,
    handleOpen?: (open: boolean) => void,
    handleSubMenus?: () => void,
    submenus?: any
}
