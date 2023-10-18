import { ReactNode } from "react"


export interface ILabel {
    children?: ReactNode,
    size?: number | string,
    type: 'title' | 'value'
}
