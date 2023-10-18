import { ReactNode } from "react"


export interface IInput {
    id?: string,
    name?: string,
    label?: string,
    value: string | number,
    icon?: ReactNode,
    onChange?: (event: any) => void,
}
