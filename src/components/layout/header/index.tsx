import { useContext } from "react"
import { HeaderProps } from "./interface"
import { HeaderStyled } from "./style/styled"
import ThemeContext from "../../../pages/app/contexts"


export function Header(props: HeaderProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <HeaderStyled theme={theme} {...props}>
            Header
        </HeaderStyled>
    )
}
