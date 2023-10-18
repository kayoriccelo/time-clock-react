import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TbPointFilled } from "react-icons/tb"

import { GlobalContext } from "../../../pages/app/contexts"

import { SBreadcrumb, SBreadcrumbGroup, SBreadcrumbIcon, SBreadcrumbLabel } from "./styles"


export function Breadcrumb() {
    const navigate = useNavigate()
    const { global, setGlobal } = useContext(GlobalContext)
    const { breadcrumbs } = global

    function handlerClick(breadcrumb: any) {
        navigate(breadcrumb.to)

        setGlobal({
            ...global,
            title: breadcrumb.title,
            breadcrumbs: breadcrumb.previous
        })
    }

    return (
        <SBreadcrumb>
            {breadcrumbs && breadcrumbs.map((breadcrumb, index) => (
                <SBreadcrumbGroup key={`sbg-${index}`}>
                    <SBreadcrumbIcon key={`sb-icon-${index}`}>
                        <TbPointFilled key={`b-icon-${index}`} />
                    </SBreadcrumbIcon>

                    <SBreadcrumbLabel
                        key={`sb-label-${index}`}
                        onClick={() => handlerClick(breadcrumb)}
                    >
                        {breadcrumb.title}
                    </SBreadcrumbLabel>
                </SBreadcrumbGroup>
            ))}
        </SBreadcrumb>
    )
}
