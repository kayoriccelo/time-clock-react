import { IMain } from "./interface"
import { SMain } from "./style/styled"


export function Main({ children }: IMain) {
    return (
        <SMain>
            {children}
        </SMain>
    )
}
