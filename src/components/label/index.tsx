import { useContext } from "react"

import { ILabel } from "./interface"
import { SLabel } from "./style/styled"
import { GlobalContext } from "../../pages/app/context"


export function Label({ children, type, size }: ILabel) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SLabel 
            theme={theme} 
            type={type}
            size={size}
        >
            {children}
        </SLabel>
    )
}
