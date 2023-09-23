import { IContent } from "./interfaces"
import { SContent } from "./styles/styled"


export function Content ({ children }: IContent) {
    return (
        <SContent>
            {children}
        </SContent>
    )
}
