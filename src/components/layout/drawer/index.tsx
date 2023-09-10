import { IDrawer } from "./interface"
import { SDrawer, STitleDrawer } from "./style/styled"
import { SubMenu } from "../submenu"
import { ISubMenu } from "../submenu/interface"


export function Drawer({ open, titleMenu, submenus, handleOpen }: IDrawer) {
    return (
        <SDrawer open={open}>
            <STitleDrawer>{titleMenu}</STitleDrawer>

            {submenus && submenus.map((submenu: ISubMenu, index: number) => {
                const { to, icon, title, breadcrumbs } = submenu

                return (
                    <SubMenu
                        key={index}
                        to={to}
                        icon={icon}
                        title={title}
                        open={open}
                        handleOpen={handleOpen}
                        breadcrumbs={breadcrumbs}
                    />
                )
            })}
        </SDrawer>
    )
}
