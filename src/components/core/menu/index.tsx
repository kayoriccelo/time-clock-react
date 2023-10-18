import { useContext, useState } from "react"

import { GlobalContext } from "../../../pages/app/contexts"

import { IMenu, IMenuGroup } from "./interfaces"
import { SMenuLink, SMenuButton, SMenuGroup, SMenuGroupMinimize, SMenuButtonMinimize, SSubMenuGroup } from "./styles"


export function Menu({
    title, label, icon, to, open, breadcrumbs, handlerOpen, handlerSubMenus
}: IMenu) {
    const { global, setGlobal } = useContext(GlobalContext)

    function handlerClick() {
        if (to) {
            handlerOpen && handlerOpen(false)

            setGlobal({
                ...global,
                title: title ? title : global.title,
                breadcrumbs: breadcrumbs ? breadcrumbs : global.breadcrumbs
            })
        } else {
            handlerOpen && handlerOpen(!open)

            handlerSubMenus && handlerSubMenus()
        }
    }

    return (
        to ? (
            <SMenuLink to={to} onClick={() => handlerClick()}>
                {icon && icon}

                {label && label}
            </SMenuLink>
        ) : (
            <SMenuButton onClick={() => handlerClick()}>
                {icon && icon}

                {label && label}
            </SMenuButton>
        )
    )
}

export function MenuMinimize({ label, icon, children, handlerOpen }: IMenu) {
    const [openSubMenu, setOpenSubMenu] = useState(false)

    function handlerClick() {
        setOpenSubMenu(!openSubMenu)
    }

    return (
        <SMenuGroupMinimize>
            <SMenuButtonMinimize onClick={() => handlerClick()}>
                {icon && icon}

                {label && label}
            </SMenuButtonMinimize>

            <SSubMenuGroup open={openSubMenu}>
                {children && children}
            </SSubMenuGroup>
        </SMenuGroupMinimize>
    )
}

export function MenuGroup({ children }: IMenuGroup) {
    return (
        <SMenuGroup>
            {children}
        </SMenuGroup>
    )
}
