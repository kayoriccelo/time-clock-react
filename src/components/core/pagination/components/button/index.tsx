import { IPaginationButton } from "./interfaces"
import { SPaginationButton } from "./styles"


export function PaginationButton({ children, hiddenMobile, disabled, onClick }: IPaginationButton) {
    return (
        <SPaginationButton
            hiddenMobile={hiddenMobile}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </SPaginationButton>
    )
}
