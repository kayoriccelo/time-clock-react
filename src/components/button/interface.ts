import { ReactNode } from "react"


export interface ButtonProps {
    type?: "success" | "primary" | "danger" | "secondary",
    children?: ReactNode
}
