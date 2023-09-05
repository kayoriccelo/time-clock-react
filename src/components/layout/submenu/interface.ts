import { ReactNode } from "react"


export interface SubMenuProps {
    title?: string,
    icon?: ReactNode,
    to?: string,
    open?: boolean,
    handleOpen: (open: boolean) => void,
}
