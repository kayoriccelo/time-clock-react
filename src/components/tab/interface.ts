import { ReactNode } from "react"

interface TabsProps {
    tab: string,
    label: string,
    icon: ReactNode,
    content: ReactNode,
}


export interface TabProps {
    tabs: Array<TabsProps>,
    tabActiveInitial: string,
}

export interface TabGroupProps {
    theme: {}
}

export interface TabNavProps {
    children: ReactNode,   
    active: boolean,
    handleChange: () => void,
}


export interface TabContentProps {
    children: ReactNode,
    active: boolean,
}
