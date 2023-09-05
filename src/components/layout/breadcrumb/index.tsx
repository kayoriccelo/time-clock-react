import { useContext } from "react"
import { BreadcrumbStyled } from "./style/styled"
import ThemeContext from "../../../pages/app/contexts"


export function Breadcrumb () {
    const { theme } = useContext(ThemeContext)

    return (
        <BreadcrumbStyled theme={theme}>
            Home / Employees / Edit
        </BreadcrumbStyled>
    )
}
