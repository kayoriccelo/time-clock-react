import { useContext } from "react"

import { SFooter } from "./style/styled"
import { GlobalContext } from "../../../pages/app/context"


export function Footer() {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SFooter theme={theme}>
            SDO Technology Ltda © 2023. All rights reserved.
        </SFooter>
    )
}
