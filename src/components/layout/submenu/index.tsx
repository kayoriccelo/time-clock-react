import { useContext } from "react"
import ThemeContext from "../../../pages/app/contexts"
import { SubMenuProps } from "./interface"
import { SubMenuStyled } from "./style/styled"


export function SubMenu({ title, to, icon, open, handleOpen }: SubMenuProps) {
    const { theme } = useContext(ThemeContext)

    function handleClick() {
        handleOpen && handleOpen(!open)
    }

    return (
        <SubMenuStyled to={to} theme={theme} onClick={handleClick}>
            {icon && icon}

            {icon && title}
        </SubMenuStyled>
    )
}
