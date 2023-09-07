import { useContext, useEffect, useState } from "react"
import { 
    StyledTab, StyledTabNav, StyledTabContent, StyledTabGroup, StyledTabIcon 
} from "./style/styled"
import ThemeContext from "../../pages/app/contexts"
import { TabContentProps, TabNavProps, TabProps } from "./interface"


export function Tab({ tabs, tabActiveInitial }: TabProps) {
    const { theme } = useContext(ThemeContext)
    const [tabActive, useTabActive] = useState('')

    useEffect(() => {
        tabActiveInitial && useTabActive(tabActiveInitial)
    }, [])

    function handleChange(newValue: string) {
        useTabActive(newValue)
    }

    return (
        <StyledTab theme={theme}>
            <StyledTabGroup theme={theme}>
                {tabs.map(item => (
                    <TabNav
                        active={item.tab === tabActive}
                        handleChange={() => handleChange(item.tab)}
                    >
                        {item.icon && item.icon} <StyledTabIcon>{item.label}</StyledTabIcon>
                    </TabNav>
                ))}
            </StyledTabGroup>

            <StyledTabGroup theme={theme}>
                {tabs.map(item => (
                    <TabContent active={item.tab === tabActive}>
                        {item.content}
                    </TabContent>
                ))}
            </StyledTabGroup>
        </StyledTab>
    )
}

export function TabNav({ children, active, handleChange }: TabNavProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledTabNav theme={theme} active={active} onClick={handleChange}>
            {children}
        </StyledTabNav>
    )
}

export function TabContent({ children, active }: TabContentProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledTabContent theme={theme} active={active}>
            {children}
        </StyledTabContent>
    )
}
