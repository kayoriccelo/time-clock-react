import { ReactNode } from "react"

import { IBreadcrumb } from "../../../core/breadcrumb/interfaces"


export interface IMenu {
    title?: string,
    label: string,
    icon: ReactNode,
    to?: string,
    open: boolean,
    breadcrumbs?: Array<IBreadcrumb>,
    handlerOpen?: (open: boolean) => void,
    handlerSubMenus?: () => void,
    submenus?: any;
    children?: ReactNode;
}

export interface IMenuGroup {
    children: ReactNode
}
