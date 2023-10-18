import { IBadge } from "./interfaces"
import { SBadge } from "./styles"


export function Badge({ children, type }: IBadge) {
    return (
        <SBadge type={type}>
            {children}
        </SBadge>
    )
}
