import { ReactNode } from "react"


export interface ITableFieldOrder {
    sort: string | undefined,
    order: string | undefined
}

export interface ITableField {
    label: string,
    name: string,
    size?: string,
    align?: string,
    order?: string,
    render?: ReactNode,
}

export interface ITable {
    fields: Array<ITableField>, 
    data: Array<{}>,
    handlerOrdernable?: (newOrdernable: string) => void,
}

export interface INoRecordsFound {
    colspan: number
}

export interface ITableHeadColumn {
    field: any,
    key: string,
    handlerOrders?: (newOrder: ITableFieldOrder) => void,
}
