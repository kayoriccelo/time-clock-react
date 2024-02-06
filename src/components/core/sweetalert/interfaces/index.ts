import { ReactNode } from "react"


export interface ISweetAlert {
    open: boolean,
    size?: "small" | "normal" | "large"
    title?: ReactNode, 
    content: ReactNode, 
    actions: ReactNode,
}
