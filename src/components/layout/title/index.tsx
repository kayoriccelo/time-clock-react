import { useContext } from "react"
import { TitleStyled } from "./style/styled"
import { TitleProps } from "./interface"
import ThemeContext from "../../../pages/app/contexts"


export function Title (props: TitleProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <TitleStyled theme={theme} {...props}>
            {props.children}
        </TitleStyled>
    )
}
