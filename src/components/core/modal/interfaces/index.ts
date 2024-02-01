import { ReactNode } from "react"


export interface IModal {
    open: Boolean,
    onClose: () => void,
    size?: "small" | "normal" | "large"
    header?: ReactNode, 
    body: ReactNode, 
    footer?: ReactNode
}
