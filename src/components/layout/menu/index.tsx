import { useContext } from "react"
import { MenuProps } from "./interface"
import { MenuStyled } from "./style/styled"
import ThemeContext from "../../../pages/app/contexts"


export function Menu({ title, icon, to, open, handleOpen, handleSubMenus }: MenuProps) {
    const { theme } = useContext(ThemeContext)


    function handleClick() {
        if (to) {
            handleOpen && handleOpen(false)
        } else {    
            handleOpen && handleOpen(!open)

            handleSubMenus && handleSubMenus()
        }
    }

    return (
        <MenuStyled to={to} theme={theme} onClick={() => handleClick()}>
            {icon && icon}

            {icon && title}
        </MenuStyled>
    )
}
