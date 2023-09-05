import { DrawerProps } from "./interface"
import { DrawerStyled, TitleDrawerStyle } from "./style/styled"
import { SubMenu } from "../submenu"
import { SubMenuProps } from "../submenu/interface"


export function Drawer({ open, titleMenu, submenus, handleOpen }: DrawerProps) {
    return (
        <DrawerStyled open={open}>
            <TitleDrawerStyle>{titleMenu}</TitleDrawerStyle>

            {submenus && submenus.map((submenu: SubMenuProps, index: number) => {
                const { to, icon, title } = submenu

                return (
                    <SubMenu
                        key={index}
                        to={to}
                        icon={icon}
                        title={title}
                        open={open}
                        handleOpen={handleOpen}
                    />
                )
            })}
        </DrawerStyled>
    )
}
