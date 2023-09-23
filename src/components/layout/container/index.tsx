
import { IContainer } from "./interfaces"
import { SContainer } from "./styles"


export function Container({ children }: IContainer) {
    return (
        <SContainer>
            {children}
        </SContainer>
    )
}
