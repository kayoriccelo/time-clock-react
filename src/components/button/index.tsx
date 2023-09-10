import { useContext } from "react"

import { IButton } from "./interface"
import { SButton } from "./style/styled"
import { GlobalContext } from "../../pages/app/context"


export function Button({ children, type, ...rest }: IButton) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SButton type={type} theme={theme} {...rest}>
            {children}
        </SButton>
    )
}
