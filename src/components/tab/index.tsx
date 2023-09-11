import { useEffect, useState } from "react"

import { STab, STabContent, STabGroup, STabIcon, STabNav } from "./style/styled"
import { ITabContent, ITabNav, ITab } from "./interface"


export function Tab({ tabs, tabActiveInitial }: ITab) {
    const [tabActive, useTabActive] = useState('')

    useEffect(() => {
        tabActiveInitial && useTabActive(tabActiveInitial)
    }, [])

    function handlerChange(newValue: string) {
        useTabActive(newValue)
    }

    return (
        <STab>
            <STabGroup>
                {tabs.map((item, index) => (
                    <TabNav
                        key={`tab-nav-${index}`}
                        active={item.tab === tabActive}
                        handlerChange={() => handlerChange(item.tab)}
                    >
                        {item.icon && item.icon} <STabIcon key={`stab-icon-${index}`}>{item.label}</STabIcon>
                    </TabNav>
                ))}
            </STabGroup>

            <STabGroup>
                {tabs.map((item, index) => (
                    <TabContent key={`tab-content-${index}`} active={item.tab === tabActive}>
                        {item.content}
                    </TabContent>
                ))}
            </STabGroup>
        </STab>
    )
}

export function TabNav({ children, active, handlerChange }: ITabNav) {
    return (
        <STabNav active={active} onClick={handlerChange}>
            {children}
        </STabNav>
    )
}

export function TabContent({ children, active }: ITabContent) {
    return (
        <STabContent active={active}>
            {children}
        </STabContent>
    )
}
