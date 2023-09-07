import { ReactNode } from "react"


export interface LabelProps {
    children?: ReactNode,
    size?: number | string,
    is_title?: boolean,
    is_value?: boolean
}
