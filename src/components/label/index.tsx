import { ILabel } from "./interfaces"
import { SLabel } from "./styles"


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
