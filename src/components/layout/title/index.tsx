import { useContext } from "react"

import { STitle } from "./style/styled"
import { GlobalContext } from "../../../pages/app/contexts"


export function Title () {
    const { global } = useContext(GlobalContext)
    const { title } = global

    return (
        <STitle>
            {title}
        </STitle>
    )
}
