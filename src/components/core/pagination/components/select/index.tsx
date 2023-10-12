import { IPaginationSelect } from "./interfaces"
import { SPaginationSelect } from "./styles"


export function PaginationSelect({ handlerPageSize }: IPaginationSelect) {
    return (
        <SPaginationSelect onChange={event => handlerPageSize(event)}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={1000}>1000</option>
        </SPaginationSelect>
    )
}
