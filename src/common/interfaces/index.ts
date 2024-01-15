
interface ICurrent {
    addEventListener: (value: any, method: any) => void,
    preventDefault: () => void,
}

interface ICurrentTarget {
    value: any
}

export interface IEvent {
    current?: ICurrent,
    currentTarget: ICurrentTarget,
    preventDefault: () => void
}
