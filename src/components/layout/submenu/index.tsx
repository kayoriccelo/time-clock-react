import { useContext } from "react"

import { GlobalContext } from "../../../pages/app/context"
import { ISubMenu } from "./interface"
import { SSubMenu } from "./style/styled"


export function SubMenu({ title, to, icon, open, breadcrumbs, handleOpen }: ISubMenu) {
    const { global, handlerGlobal } = useContext(GlobalContext)
    const { theme } = global

    function handleClick() {
        handleOpen && handleOpen(!open)

        handlerGlobal({ ...global, title: title, breadcrumbs: breadcrumbs })
    }

    return (
        <SSubMenu to={to} theme={theme} onClick={handleClick}>
            {icon && icon}

            {title && title}
        </SSubMenu>
    )
}
