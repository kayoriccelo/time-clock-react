import { IContent } from "./interface"
import { SContent } from "./style/styled"


export function Content ({ children }: IContent) {
    return (
        <SContent>
            {children}
        </SContent>
    )
}
