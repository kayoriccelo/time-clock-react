import { IRow } from "./interfaces"
import { SRow } from "./styles"


export function Row ({children}: IRow) {
    return (
        <SRow>
            {children}
        </SRow>
    )
}
