import { useContext } from "react"

import { GlobalContext } from "../../../pages/app/contexts"

import { ISubMenu } from "./interfaces"
import { SSubMenu } from "./styles"


export function SubMenu({
    label, title, to, icon, open, breadcrumbs, handlerOpen
}: ISubMenu) {
    const { global, setGlobal } = useContext(GlobalContext)

    function handleClick() {
        handlerOpen && handlerOpen(!open)

        setGlobal({
            ...global,
            title: title ? title : global.title,
            breadcrumbs: breadcrumbs ? breadcrumbs : global.breadcrumbs
        })
    }

    return (
        <SSubMenu to={to} onClick={handleClick}>
            {icon && icon}

            {label && label}
        </SSubMenu>
    )
}
