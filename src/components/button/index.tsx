import { IButton } from "./interfaces"
import { SButton } from "./styles/styled"


export function Button({ children, type }: IButton) {
    return (
        <SButton type={type}>
            {children}
        </SButton>
    )
}
