import { ReactNode } from "react"

import { IBreadcrumb } from "../../../core/breadcrumb/interfaces"


export interface ISubMenu {
    title?: string,
    label: string,
    icon: ReactNode,
    to: string,
    open: boolean,
    breadcrumbs: Array<IBreadcrumb>,
    handlerOpen: (open: boolean) => void,
}
