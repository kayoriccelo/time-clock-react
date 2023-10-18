import { ReactNode } from "react"


export interface IButton {
    type?: "success" | "primary" | "warning" |  "danger" | "secondary",
    outline?: Boolean,
    label?: String,
    hint?: String,
    icon?: ReactNode,
    onClick?: () => void,
}
