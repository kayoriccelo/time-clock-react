import { useContext } from "react"
import { BoxProps } from "./interface"
import { StyledBox } from "./style/styled"
import ThemeContext from "../../pages/app/contexts"


export function Box({ children }: BoxProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledBox theme={theme}>
            {children}
        </StyledBox>
    )
}
