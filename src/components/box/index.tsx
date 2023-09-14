import { IBox } from "./interfaces"
import { SBox } from "./styles"


export function Box({ children }: IBox) {
    return (
        <SBox>
            {children}
        </SBox>
    )
}
