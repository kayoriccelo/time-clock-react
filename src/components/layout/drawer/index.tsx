import { DrawerProps } from "./interface"
import { DrawerStyled } from "./style/styled"
import { SubMenu } from "../submenu"
import { SubMenuProps } from "../submenu/interface"


export function Drawer({ open, submenus, handleOpen }: DrawerProps) {
    return (
        <DrawerStyled open={open}>
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
