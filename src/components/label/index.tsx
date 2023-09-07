import { useContext } from "react"
import { LabelProps } from "./interface"
import { StyledLabel } from "./style/styled"
import ThemeContext from "../../pages/app/contexts"


export function Label({ children, is_title, is_value, size }: LabelProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledLabel 
            theme={theme} 
            is_title={is_title} 
            is_value={is_value}
            size={size}
        >
            {children}
        </StyledLabel>
    )
}
