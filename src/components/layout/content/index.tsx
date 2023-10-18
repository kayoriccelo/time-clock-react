import { IContent } from "./interfaces"
import { SContent } from "./styles"


export function Content ({ children }: IContent) {
    return (
        <SContent>
            {children}
        </SContent>
    )
}
