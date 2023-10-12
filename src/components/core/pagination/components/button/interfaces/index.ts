import { ReactNode } from "react"


export interface IPaginationButton {
    children: ReactNode, 
    hiddenMobile?: boolean, 
    disabled: boolean, 
    onClick: (event: any) => void
}
