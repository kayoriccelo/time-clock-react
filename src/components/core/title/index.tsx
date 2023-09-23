import { useContext } from "react"

import { GlobalContext } from "../../../pages/app/contexts"

import { STitle } from "./styles"


export function Title () {
    const { global } = useContext(GlobalContext)
    const { title } = global

    return (
        <STitle>
            {title}
        </STitle>
    )
}
