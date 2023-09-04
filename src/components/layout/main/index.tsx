import { useContext } from "react"
import { MainProps } from "./interface"
import { MainStyled } from "./style/styled"
import ThemeContext from "../../../pages/app/contexts"


export function Main (props: MainProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <MainStyled theme={theme} {...props}>
            {props.children}
        </MainStyled>
    )
}
