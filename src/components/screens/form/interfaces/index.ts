import { ReactNode } from "react"


export interface IFormField {
    id: string,
    name: string,
    title: string,
    value: string,
    type: string,
    options?: ReactNode,
    onChange?: (event: any) => void
}

export interface IForm {
    header?: any,
    fields?: Array<IFormField>,
    actions?: any
}
