import { useState } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

import { INoRecordsFound, ITable, ITableFieldOrder, ITableHeadColumn } from "./interfaces"
import {
    STable, STableBody, STableBodyColumn, STableBodyRow, STableHead, STableHeadColumn, STableHeadRow, STableOrder
} from "./styles"


function NoRecordsFound({ colspan }: INoRecordsFound) {
    return (
        <STableBodyRow>
            <STableBodyColumn colSpan={colspan} style={{ textAlign: 'center', width: '100%' }}>
                No Records Found
            </STableBodyColumn>
        </STableBodyRow>
    )
}

function TableHeadColumn({ field, key, handlerOrders }: ITableHeadColumn) {
    const [orderColumn, useOrderColumn] = useState<ITableFieldOrder>({ sort: field.name, order: '' })

    function handlerOrder() {
        let newOrderColumn = { ...orderColumn, order: '' }

        if (orderColumn.order == '') {
            newOrderColumn = { ...orderColumn, order: 'asc' }

        } else if (orderColumn.order == 'asc') {
            newOrderColumn = { ...orderColumn, order: 'desc' }
        }

        useOrderColumn(newOrderColumn)

        handlerOrders && handlerOrders(newOrderColumn)
    }

    return (
        <STableHeadColumn
            key={key}
            size={field.size}
            align={field.align}
        >
            <STableOrder align={field.align} onClick={() => handlerOrder()}>
                {field.label}

                {orderColumn.order == 'asc' && <IoMdArrowDropdown size={18} style={{ marginLeft: 10 }} />}

                {orderColumn.order == 'desc' && <IoMdArrowDropup size={18} style={{ marginLeft: 10 }} />}
            </STableOrder>
        </STableHeadColumn>
    )
}

export function Table({ fields, data, handlerOrdernable }: ITable) {
    const [orders, useOrders] = useState<ITableFieldOrder[]>([])

    const handlerOrders = (newOrder: ITableFieldOrder) => {
        let newOrders = orders.filter(item => item.sort !== newOrder.sort)
        newOrders = [...newOrders, newOrder]

        if (newOrders.length > 0) {
            let filterSorts = ''
            let filterOrders = ''

            newOrders.map((item, index) => {
                if (item.order !== '') {
                    filterSorts = `${item.sort}${index < newOrders.length - 1 ? ',' : ''}`
                    filterOrders = `${item.order}${index < newOrders.length - 1 ? ',' : ''}`
                }
            })

            handlerOrdernable && handlerOrdernable(`&_sort=${filterSorts}&_order=${filterOrders}`)
        }

        useOrders(newOrders)
    }

    return (
        <STable>
            <STableHead>
                <STableHeadRow>
                    {fields.map((field, index) => (
                        <TableHeadColumn
                            key={`sTable-hc-${index}`}
                            field={field}
                            handlerOrders={handlerOrders}
                        />
                    ))}
                </STableHeadRow>
            </STableHead>

            <STableBody>
                {data.length > 0
                    ? data.map((item, index) => (
                        <STableBodyRow key={`sTable-br-${index}`}>
                            {fields.map((field, index) => (
                                <STableBodyColumn
                                    key={`sTable-bc-${index}`}
                                    size={field.size}
                                    align={field.align}
                                >
                                    {field.name ? item[field.name] : field.render}
                                </STableBodyColumn>
                            ))}
                        </STableBodyRow>
                    ))
                    : <NoRecordsFound colspan={fields.length} />
                }
            </STableBody>
        </STable>
    )
}
