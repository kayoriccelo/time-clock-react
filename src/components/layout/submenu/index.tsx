import { useContext } from "react"

import { GlobalContext } from "../../../pages/app/contexts"
import { ISubMenu } from "./interface"
import { SSubMenu } from "./style/styled"


export function SubMenu({ title, to, icon, open, breadcrumbs, handleOpen }: ISubMenu) {
    const { global, setGlobal } = useContext(GlobalContext)

    function handleClick() {
        handleOpen && handleOpen(!open)

        setGlobal({ ...global, title: title, breadcrumbs: breadcrumbs })
    }

    return (
        <SSubMenu to={to} onClick={handleClick}>
            {icon && icon}

            {title && title}
        </SSubMenu>
    )
}
