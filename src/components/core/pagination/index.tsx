import { useEffect, useState } from "react"
import {
    MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight
} from "react-icons/md"

import { IEvent } from "../../../common/interfaces"

import { SPagination, SPaginationGroup } from "./styles"
import { IPagination } from "./interfaces"
import { PaginationButton, PaginationInput, PaginationSelect } from "./components"


export function Pagination({ data, handlerPagination }: IPagination) {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        if (data && data.totalRecords > pageSize) {
            setPageCount(Math.ceil(data.totalRecords / pageSize))
        }
    }, [data])


    useEffect(() => {
        if (pageCount == 0) {
            const content = document.getElementById('time-clock-content')

            content && (content.scrollTop = content.scrollHeight)
        }
    }, [pageCount])

    function handlerPage(newPage: number) {
        if (newPage <= pageCount) {
            setPage(newPage)

            handlerPagination(newPage, pageSize)
        }
    }

    function handlerPageSize(event: any) {
        const newPageSize = Number(event.currentTarget.value)

        setPage(1)
        setPageSize(newPageSize)

        handlerPagination(1, newPageSize)
    }

    return (
        <SPagination>
            <SPaginationGroup>
                <PaginationButton
                    disabled={page == 1}
                    onClick={() => handlerPage(1)}
                >
                    <MdKeyboardDoubleArrowLeft size={18} />
                </PaginationButton>

                <PaginationButton
                    hiddenMobile={true}
                    disabled={page - 2 <= 0}
                    onClick={() => handlerPage(page - 2)}
                >
                    {page - 2 <= 0 ? '--' : page - 2}
                </PaginationButton>

                <PaginationButton
                    disabled={page - 1 <= 0}
                    onClick={() => handlerPage(page - 1)}
                >
                    <MdKeyboardArrowLeft size={18} />
                </PaginationButton>

                <PaginationInput
                    disabled={pageCount == 1}
                    value={page}
                    onChange={(event: IEvent) => handlerPage(Number(event.currentTarget.value))}
                />

                <PaginationButton
                    disabled={page + 1 > pageCount}
                    onClick={() => handlerPage(page + 1)}
                >
                    <MdKeyboardArrowRight size={18} />
                </PaginationButton>

                <PaginationButton
                    hiddenMobile={true}
                    disabled={page + 2 > pageCount}
                    onClick={() => handlerPage(page + 2)}
                >
                    {page + 2 > pageCount ? '--' : page + 2}
                </PaginationButton>

                <PaginationButton
                    disabled={page == pageCount}
                    onClick={() => handlerPage(pageCount)}
                >
                    <MdKeyboardDoubleArrowRight size={18} />
                </PaginationButton>

                <PaginationSelect handlerPageSize={handlerPageSize} />
            </SPaginationGroup>
        </SPagination>
    )
}
