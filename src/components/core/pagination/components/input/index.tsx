import { IPaginationInput } from "./interfaces"
import { SPaginationInput } from "./styles"


export function PaginationInput({ disabled, value, onChange }: IPaginationInput) {
    return (
        <SPaginationInput
            disabled={disabled}
            value={value}
            onChange={onChange}
        />
    )
}
