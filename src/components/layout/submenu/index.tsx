import { SubMenuProps } from "./interface"
import { SubMenuStyled } from "./style/styled"


export function SubMenu({ title, to, icon, open, handleOpen }: SubMenuProps) {

    function handleClick() {
        handleOpen && handleOpen(!open)
    }

    return (
        <SubMenuStyled to={to} onClick={handleClick}>
            {icon && icon}

            {icon && title}
        </SubMenuStyled>
    )
}
