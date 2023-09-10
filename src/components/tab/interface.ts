import { ReactNode } from "react"


interface ITabItem {
    tab: string,
    label: string,
    icon: ReactNode,
    content: ReactNode,
}

export interface ITab {
    tabs: Array<ITabItem>,
    tabActiveInitial: string,
}

export interface ITabGroup {
    theme: {}
}

export interface ITabNav {
    children: ReactNode,   
    active: boolean,
    handlerChange: () => void,
}


export interface ITabContent {
    children: ReactNode,
    active: boolean,
}
