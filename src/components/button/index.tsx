import { effectClick } from "../../common/theme/useful"

import { IButton } from "./interfaces"
import { SButton } from "./styles/styled"


export function Button({ children, type, onClick }: IButton) {
    function onClickPage(event: any) {
        effectClick(event)

        onClick && onClick()
    }

    return (
        <SButton type={type} onClick={event => onClickPage(event)}>
            {children}
        </SButton>
    )
}
