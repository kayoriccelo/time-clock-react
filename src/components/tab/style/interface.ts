
export interface ISTabGroup {
    theme: {},
}

export interface ISTabNav {
    active: boolean,
    theme: {},
    onClick: (event: any, newValue: string) => void,
}

export interface ISTabContent {
    active: boolean,
    theme: {},
}
