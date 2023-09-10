import { useContext } from "react"

import { IMenu } from "./interface"
import { SMenuLink, SMenuButton } from "./style/styled"
import { GlobalContext } from "../../../pages/app/context"


export function Menu({ title, icon, to, open, breadcrumbs, handleOpen, handleSubMenus }: IMenu) {
    const { global, handlerGlobal } = useContext(GlobalContext)
    const { theme } = global

    function handleClick() {
        if (to) {
            handleOpen && handleOpen(false)

            handlerGlobal({
                ...global, title: title, breadcrumbs: breadcrumbs ? breadcrumbs : global.breadcrumbs
            })
        } else {
            handleOpen && handleOpen(!open)

            handleSubMenus && handleSubMenus()
        }
    }

    return (
        to ? (
            <SMenuLink to={to} theme={theme} onClick={() => handleClick()}>
                {icon && icon}

                {title && title}
            </SMenuLink>
        ) : (
            <SMenuButton theme={theme} onClick={() => handleClick()}>
                {icon && icon}

                {title && title}
            </SMenuButton>
        )
    )
}
