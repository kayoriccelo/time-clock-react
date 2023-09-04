import { useContext } from "react"
import { FooterStyled } from "./style/styled"
import ThemeContext from "../../../pages/app/contexts"


export function Footer () {
    const { theme } = useContext(ThemeContext)
    
    return (
        <FooterStyled theme={theme}>
            Footer
        </FooterStyled>
    )
}
