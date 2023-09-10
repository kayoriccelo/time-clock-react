import { useContext } from "react"

import { IBox } from "./interface"
import { SBox } from "./style/styled"
import { GlobalContext } from "../../pages/app/context"


export function Box({ children }: IBox) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SBox theme={theme}>
            {children}
        </SBox>
    )
}
