import { useContext, useState } from "react"
import { SidebarStyled } from "./style/styled"
import { MdDashboardCustomize, MdAppRegistration, MdFingerprint } from "react-icons/md"
import { BiSolidBusiness } from "react-icons/bi"
import { Menu } from "../menu"
import { Drawer } from "../drawer"
import ThemeContext from "../../../pages/app/contexts"


export function Sidebar() {
    const { theme } = useContext(ThemeContext)
    const [open, useOpen] = useState(false)
    const [submenus, useSubMenus] = useState([])

    function handleOpen(value: boolean) {
        useOpen(value)
    }

    function handleSubMenus(value: any) {
        useSubMenus(value)
    }

    return (
        <>
            <Drawer open={open} submenus={submenus} handleOpen={handleOpen} />

            <SidebarStyled theme={theme}>
                <Menu
                    title="Dashboard"
                    icon={<MdDashboardCustomize style={{ paddingBottom: 8 }} size={20} />}
                    to="/dashboard"
                    handleOpen={handleOpen}
                />

                <Menu
                    title="Registrations"
                    icon={<MdAppRegistration style={{ paddingBottom: 8 }} size={20} />}
                    handleOpen={handleOpen}
                    handleSubMenus={() => handleSubMenus([{
                        title: 'Company',
                        to: '/registrations/company',
                        icon: <BiSolidBusiness style={{ marginRight: 15 }} size={20} />
                    }])}
                />

                <Menu
                    title="Point Marking"
                    icon={<MdFingerprint style={{ paddingBottom: 8 }} size={20} />}
                    to='/point_marking'
                    handleOpen={handleOpen}
                />
            </SidebarStyled>
        </>
    )
}
