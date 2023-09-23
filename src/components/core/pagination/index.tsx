import { useEffect, useState } from "react"
import {
    MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight
} from "react-icons/md"


import { SPageSelect, SPageGroup, SPageButton, SPageInput, SPageOption } from "./styles"
import { IPagination } from "./interface"


export function Pagination({ data, handlerPagination }: IPagination) {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        if (data && data.totalRecords > pageSize) {
            setPageCount(Math.ceil(data.totalRecords / pageSize))
        }
    }, [data])

    function handlerPage(newPage: number) {
        if (newPage <= pageCount) {
            setPage(newPage)

            handlerPagination(newPage, pageSize)
        }
    }

    function handlerPageSize(newPageSize: number) {
        setPage(1)
        setPageSize(newPageSize)

        handlerPagination(1, newPageSize)
    }

    return (
        <SPageGroup>
            <SPageButton
                disabled={page == 1}
                onClick={() => handlerPage(1)}
            >
                <MdKeyboardDoubleArrowLeft size={18} />
            </SPageButton>

            <SPageButton
                disabled={page - 2 <= 0}
                onClick={() => handlerPage(page - 2)}
            >
                {page - 2 <= 0 ? '--' : page - 2}
            </SPageButton>

            <SPageButton
                disabled={page - 1 <= 0}
                onClick={() => handlerPage(page - 1)}
            >
                <MdKeyboardArrowLeft size={18} />
            </SPageButton>

            <SPageInput
                disabled={pageCount == 1}
                value={page}
                onChange={event => handlerPage(Number(event.currentTarget.value))}
            />

            <SPageButton
                disabled={page + 1 > pageCount}
                onClick={() => handlerPage(page + 1)}
            >
                <MdKeyboardArrowRight size={18} />
            </SPageButton>

            <SPageButton
                disabled={page + 2 > pageCount}
                onClick={() => handlerPage(page + 2)}
            >
                {page + 2 > pageCount ? '--' : page + 2}
            </SPageButton>

            <SPageButton
                disabled={page == pageCount}
                onClick={() => handlerPage(pageCount)}
            >
                <MdKeyboardDoubleArrowRight size={18} />
            </SPageButton>

            <SPageSelect onChange={event => handlerPageSize(Number(event.currentTarget.value))}>
                <SPageOption value={10}>10</SPageOption>
                <SPageOption value={20}>20</SPageOption>
                <SPageOption value={50}>50</SPageOption>
                <SPageOption value={1000}>1000</SPageOption>
            </SPageSelect>
        </SPageGroup>
    )
}
