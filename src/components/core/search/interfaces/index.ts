import { ReactNode } from "react"


export interface ISearch {
    value: string,
    icon: ReactNode,
    onChange: (event: any) => void
}
