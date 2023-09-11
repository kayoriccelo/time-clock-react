import { ILabel } from "./interface"
import { SLabel } from "./style/styled"


export function Label({ children, type, size }: ILabel) {
    return (
        <SLabel
            type={type}
            size={size}
        >
            {children}
        </SLabel>
    )
}
