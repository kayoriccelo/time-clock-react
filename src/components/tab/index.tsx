import { useContext, useEffect, useState } from "react"

import { STab, STabContent, STabGroup, STabIcon, STabNav } from "./style/styled"
import { ITabContent, ITabNav, ITab } from "./interface"
import { GlobalContext } from "../../pages/app/context"


export function Tab({ tabs, tabActiveInitial }: ITab) {
    const { global } = useContext(GlobalContext)
    const { theme } = global
    const [tabActive, useTabActive] = useState('')

    useEffect(() => {
        tabActiveInitial && useTabActive(tabActiveInitial)
    }, [])

    function handlerChange(newValue: string) {
        useTabActive(newValue)
    }

    return (
        <STab theme={theme}>
            <STabGroup theme={theme}>
                {tabs.map(item => (
                    <TabNav
                        active={item.tab === tabActive}
                        handlerChange={() => handlerChange(item.tab)}
                    >
                        {item.icon && item.icon} <STabIcon>{item.label}</STabIcon>
                    </TabNav>
                ))}
            </STabGroup>

            <STabGroup theme={theme}>
                {tabs.map(item => (
                    <TabContent active={item.tab === tabActive}>
                        {item.content}
                    </TabContent>
                ))}
            </STabGroup>
        </STab>
    )
}

export function TabNav({ children, active, handlerChange }: ITabNav) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <STabNav theme={theme} active={active} onClick={handlerChange}>
            {children}
        </STabNav>
    )
}

export function TabContent({ children, active }: ITabContent) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <STabContent theme={theme} active={active}>
            {children}
        </STabContent>
    )
}
