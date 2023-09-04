import { ContentProps } from "./interface"
import { ContentStyled } from "./style/styled"

export function Content (props: ContentProps) {
    return (
        <ContentStyled>
            {props.children}
        </ContentStyled>
    )
}
