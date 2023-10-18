import { ReactNode } from "react"


export interface IList {
    search?: ReactNode,
    action?: ReactNode,
    content: ReactNode,
    footer?: ReactNode
}
