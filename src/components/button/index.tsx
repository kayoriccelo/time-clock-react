import { IButton } from "./interface"
import { SButton } from "./style/styled"


export function Button({ children, type }: IButton) {
    return (
        <SButton type={type}>
            {children}
        </SButton>
    )
}
