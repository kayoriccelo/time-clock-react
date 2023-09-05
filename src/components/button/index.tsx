import { useContext } from "react"
import { ButtonProps } from "./interface"
import { StyledButton } from "./style/styled"
import ThemeContext from "../../pages/app/contexts"


export function Button ({children, type,  ...rest}: ButtonProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledButton type={type} theme={theme} {...rest}>
            { children }
        </StyledButton>
    )
}
