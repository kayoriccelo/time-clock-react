import { IBox } from "./interface"
import { SBox } from "./style/styled"


export function Box({ children }: IBox) {
    return (
        <SBox>
            {children}
        </SBox>
    )
}
