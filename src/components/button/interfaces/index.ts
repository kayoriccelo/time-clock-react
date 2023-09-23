import { ReactNode } from "react"


export interface IButton {
    type?: "success" | "primary" | "danger" | "secondary",
    children?: ReactNode,
    onClick?: () => void,
}
