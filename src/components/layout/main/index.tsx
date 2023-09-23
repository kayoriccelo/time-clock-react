import { IMain } from "./interfaces"
import { SMain } from "./styles"


export function Main({ children }: IMain) {
    return (
        <SMain>
            {children}
        </SMain>
    )
}
