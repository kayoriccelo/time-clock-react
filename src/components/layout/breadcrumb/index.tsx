import { useContext } from "react"
import { TbPointFilled } from "react-icons/tb"

import { SBreadcrumb, SBreadcrumbIcon, SBreadcrumbLabel } from "./style/styled"
import { GlobalContext } from "../../../pages/app/context"


export function Breadcrumb() {
    const { global } = useContext(GlobalContext)
    const { theme, breadcrumbs } = global

    return (
        <SBreadcrumb theme={theme}>
            {breadcrumbs && breadcrumbs.map((breadcrumb, index) => {
                return (
                    <>
                        <SBreadcrumbLabel>
                            {breadcrumb.title}
                        </SBreadcrumbLabel>

                        {index == breadcrumbs.length && <SBreadcrumbIcon><TbPointFilled/></SBreadcrumbIcon>}
                    </>
                )
            })}
        </SBreadcrumb>
    )
}
