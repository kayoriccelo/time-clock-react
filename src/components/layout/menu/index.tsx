import { useContext } from "react"

import { GlobalContext } from "../../../pages/app/contexts"

import { IMenu } from "./interfaces"
import { SMenuLink, SMenuButton } from "./styles"


export function Menu({ title, icon, to, open, breadcrumbs, handleOpen, handleSubMenus }: IMenu) {
    const { global, setGlobal } = useContext(GlobalContext)
    
    function handleClick() {
        if (to) {
            handleOpen && handleOpen(false)

            setGlobal({
                ...global, title: title, breadcrumbs: breadcrumbs ? breadcrumbs : global.breadcrumbs
            })
        } else {
            handleOpen && handleOpen(!open)

            handleSubMenus && handleSubMenus()
        }
    }

    return (
        to ? (
            <SMenuLink to={to} onClick={() => handleClick()}>
                {icon && icon}

                {title && title}
            </SMenuLink>
        ) : (
            <SMenuButton onClick={() => handleClick()}>
                {icon && icon}

                {title && title}
            </SMenuButton>
        )
    )
}
