import { useState } from "react"
import { MdDashboardCustomize, MdAppRegistration, MdFingerprint } from "react-icons/md"
import { BiSolidBusiness } from "react-icons/bi"
import { HiCubeTransparent } from "react-icons/hi"

import { SSidebar, SSidebarSlogan } from "./style/styled"
import { Menu } from "../menu"
import { Drawer } from "../drawer"


export function Sidebar() {
    const [open, useOpen] = useState(false)
    const [submenus, useSubMenus] = useState([])
    const [titleMenu, useTitleMenu] = useState('')

    function handleOpen(value: boolean) {
        useOpen(value)
    }

    function handleSubMenus(title: string, value: any) {
        useSubMenus(value)
        useTitleMenu(title)
    }

    return (
        <>
            <Drawer
                open={open}
                titleMenu={titleMenu}
                submenus={submenus}
                handleOpen={handleOpen}
            />

            <SSidebar>
                <SSidebarSlogan>
                    <HiCubeTransparent size={55} style={{ color: 'white' }} />
                </SSidebarSlogan>

                <Menu
                    title="Home"
                    icon={<MdDashboardCustomize style={{ paddingBottom: 8 }} size={18} />}
                    to="/"
                    breadcrumbs={[
                        { to: '/', title: 'Home'},
                    ]}
                    open={open}
                    handleOpen={handleOpen}
                />

                <Menu
                    title="Registrations"
                    icon={<MdAppRegistration style={{ paddingBottom: 8 }} size={18} />}
                    open={open}
                    handleOpen={handleOpen}
                    handleSubMenus={() => handleSubMenus('Registrations', [{
                        title: 'Company',
                        to: '/registrations/company/detail',
                        icon: <BiSolidBusiness style={{ marginRight: 40 }} size={18} />,
                        breadcrumbs: [
                            { to: '/', title: 'Home'}
                        ]
                    }])}
                />

                <Menu
                    title="Point Marking"
                    icon={<MdFingerprint style={{ paddingBottom: 8 }} size={18} />}
                    to='/point_marking'
                    breadcrumbs={[
                        { to: '/', title: 'Home'}
                    ]}
                    open={open}
                    handleOpen={handleOpen}
                />
            </SSidebar>
        </>
    )
}
