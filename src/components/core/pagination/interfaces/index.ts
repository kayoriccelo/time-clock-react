
export interface IPagination {
    data: { totalRecords: number }
    handlerPagination: (newpage: number, newPageSize: number) => void
}
