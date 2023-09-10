import { useContext } from "react"

import { IContainer } from "./interface"
import { SContainer } from "./style/styled"
import { GlobalContext } from "../../../pages/app/context"


export function Container({ children }: IContainer) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SContainer theme={theme}>
            {children}
        </SContainer>
    )
}
