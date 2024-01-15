import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { MdAppRegistration, MdDashboardCustomize, MdFingerprint } from "react-icons/md"
import { BiSolidBusiness } from "react-icons/bi"

import {
    Container, Main, Sidebar, Drawer, MenuGroup, Menu, MenuMinimize, Header, Content, Footer,
    Slogan
} from "../../components"
import { breadcrumbs } from "../app/configs/breadcrumbs"

import { ISubMenu } from "../../components/core/submenu/interfaces"
import { SubMenu } from "../../components/core/submenu"
import { STitleDrawer } from "../../components/core/drawer/styles"


export function Home() {
    const [open, useOpen] = useState(false)
    const [submenus, useSubMenus] = useState([])
    const [titleMenu, useTitleMenu] = useState('')
    const [minimize, setMinimize] = useState(false)

    function handlerResize() {
        const { innerWidth: width } = window

        setMinimize(width <= 600)
    }

    function handlerOpen(value: boolean) {
        useOpen(value)

        handlerResize()
    }

    function handlerSubMenus(label: string, value: any) {
        useSubMenus(value)

        useTitleMenu(label)
    }

    useEffect(() => {
        window.addEventListener('resize', handlerResize)

        return () => window.removeEventListener('resize', handlerResize)
    }, [])

    return (
        <Container>
            <Drawer
                open={open}
            >
                {minimize ? (
                    <MenuGroup>
                        <Menu
                            label="Home"
                            title="Home"
                            icon={<MdDashboardCustomize style={{ paddingBottom: 8 }} size={18} />}
                            to="/"
                            breadcrumbs={[]}
                            open={open}
                            handlerOpen={handlerOpen}
                        />

                        <MenuMinimize
                            label="Registrations"
                            icon={<MdAppRegistration style={{ paddingBottom: 8 }} size={18} />}
                            open={open}
                            handlerOpen={handlerOpen}
                        >
                            <SubMenu
                                to='/registrations/company/detail'
                                icon={<BiSolidBusiness style={{ marginRight: 40 }} size={18} />}
                                title='Details company'
                                label='Company'
                                open={open}
                                handlerOpen={handlerOpen}
                                breadcrumbs={[breadcrumbs.home]}
                            />
                        </MenuMinimize>

                        <Menu
                            label="Point Marking"
                            title="Point Marking"
                            icon={<MdFingerprint style={{ paddingBottom: 8 }} size={18} />}
                            to='/point_marking'
                            breadcrumbs={[breadcrumbs.home]}
                            open={open}
                            handlerOpen={handlerOpen}
                        />
                    </MenuGroup>
                ) : (
                    <>
                        {titleMenu && <STitleDrawer>{titleMenu}</STitleDrawer>}

                        {submenus && submenus.map((submenu: ISubMenu, index: number) => {
                            const { to, title, label, icon, breadcrumbs } = submenu

                            return (
                                <SubMenu
                                    key={index}
                                    to={to}
                                    icon={icon}
                                    title={title}
                                    label={label}
                                    open={open}
                                    handlerOpen={handlerOpen}
                                    breadcrumbs={breadcrumbs}
                                />
                            )
                        })}
                    </>
                )}
            </Drawer>

            <Sidebar>
                <Slogan />

                <MenuGroup>
                    <Menu
                        label="Home"
                        title="Home"
                        icon={<MdDashboardCustomize style={{ paddingBottom: 8 }} size={18} />}
                        to="/"
                        breadcrumbs={[]}
                        open={open}
                        handlerOpen={handlerOpen}
                    />

                    <Menu
                        label="Registrations"
                        icon={<MdAppRegistration style={{ paddingBottom: 8 }} size={18} />}
                        open={open}
                        handlerOpen={handlerOpen}
                        handlerSubMenus={() => handlerSubMenus('Registrations', [{
                            label: 'Company',
                            title: 'Details company',
                            to: '/registrations/company/detail',
                            icon: <BiSolidBusiness style={{ marginRight: 40 }} size={18} />,
                            breadcrumbs: [breadcrumbs.home]
                        }])}
                    />

                    <Menu
                        label="Point Marking"
                        title="Point Marking"
                        icon={<MdFingerprint style={{ paddingBottom: 8 }} size={18} />}
                        to='/point_marking'
                        breadcrumbs={[breadcrumbs.home]}
                        open={open}
                        handlerOpen={handlerOpen}
                    />
                </MenuGroup>
            </Sidebar>

            <Main>
                <Header
                    handlerOpen={handlerOpen}
                />

                <Content>
                    <Outlet />
                </Content>

                <Footer />
            </Main>
        </Container>
    )
}
