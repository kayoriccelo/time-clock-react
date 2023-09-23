import { ISearch } from "./interfaces"
import { SSearchInput } from "./styles"


export function Search({ value, icon, onChange }: ISearch) {
    return (
        <>
            {icon && icon}

            <SSearchInput value={value} onChange={onChange} placeholder=" Search..."/>
        </>
    )
}
