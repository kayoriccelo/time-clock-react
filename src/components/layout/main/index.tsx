import { useContext } from "react"

import { IMain } from "./interface"
import { SMain } from "./style/styled"
import { GlobalContext } from "../../../pages/app/context"


export function Main({ children }: IMain) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SMain theme={theme}>
            {children}
        </SMain>
    )
}
