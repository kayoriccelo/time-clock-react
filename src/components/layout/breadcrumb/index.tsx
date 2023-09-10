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
                    <div key={`bf-${index}`} style={{display: 'flex'}}>
                        <SBreadcrumbIcon key={`sb-icon-${index}`}><TbPointFilled key={`b-icon-${index}`}/></SBreadcrumbIcon>

                        <SBreadcrumbLabel key={`sb-label-${index}`}>
                            {breadcrumb.title}
                        </SBreadcrumbLabel>
                    </div>
                )
            })}
        </SBreadcrumb>
    )
}
