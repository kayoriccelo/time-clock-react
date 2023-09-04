import { useContext } from "react"
import { ContainerProps } from "./interface"
import { ContainerStyled } from "./style/styled"
import ThemeContext from "../../../pages/app/contexts"


export function Container({ children }: ContainerProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <ContainerStyled theme={theme}>
            {children}
        </ContainerStyled>
    )
}
