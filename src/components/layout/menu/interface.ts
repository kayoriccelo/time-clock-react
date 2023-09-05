import { ReactNode } from "react"


export interface MenuProps {
    title?: string,
    icon?: ReactNode,
    to?: string,
    open?: boolean,
    handleOpen?: (open: boolean) => void,
    handleSubMenus?: () => void,
    submenus?: any
}
