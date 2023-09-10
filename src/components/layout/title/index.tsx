import { useContext } from "react"

import { STitle } from "./style/styled"
import { GlobalContext } from "../../../pages/app/context"


export function Title () {
    const { global } = useContext(GlobalContext)
    const { theme, title } = global

    return (
        <STitle theme={theme}>
            {title}
        </STitle>
    )
}
