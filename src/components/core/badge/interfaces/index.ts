import { ReactNode } from "react"


export interface IBadge {
    children?: ReactNode,
    type?: 'warning' | 'danger' | 'info' | 'primary' | 'success' | 'secondary'
}
