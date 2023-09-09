import { useContext } from "react"

import { ILabel } from "./interface"
import { SLabel } from "./style/styled"
import { GlobalContext } from "../../pages/app/context"


export function Label({ children, is_title, size }: ILabel) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SLabel 
            theme={theme} 
            is_title={is_title}
            size={size}
        >
            {children}
        </SLabel>
    )
}
