import { effectClick } from "../../../common/theme/effects"

import { IButton } from "./interfaces"
import { SButton, SButtonIcon, SButtonSpan, SButtonText } from "./styles"


export function Button({ type, outline, label, hint, icon, onClick }: IButton) {
    function onClickPage(event: any) {
        effectClick(event)

        onClick && onClick()
    }

    return (
        <SButton
            hint={hint}
            title=""
            type={type}
            outline={outline}
            onClick={event => onClickPage(event)}
        >
            <SButtonSpan>
                {icon && <SButtonIcon>{icon}</SButtonIcon>}

                {label && <SButtonText>{label}</SButtonText>}
            </SButtonSpan>
        </SButton>
    )
}
