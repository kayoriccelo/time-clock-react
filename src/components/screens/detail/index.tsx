import { useContext } from "react"

import { IActionsDetail, IContentDetail, IHeaderDetail, IScreenDetail } from "./interface"
import { SActionsDetail, SContentDetail, SHeaderDetail, SScreenDetail } from "./style/styled"
import { GlobalContext } from "../../../pages/app/context"
import { Title } from "../../layout/title"
import { Breadcrumb } from "../../layout/breadcrumb"


export function ScreenDetail({ children }: IScreenDetail) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SScreenDetail theme={theme}>
            <Title />
                
            <Breadcrumb />
            
            {children}
        </SScreenDetail>
    )
}

export function ActionsDetail({ children }: IActionsDetail) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SActionsDetail theme={theme}>
            {children}
        </SActionsDetail>
    )
}

export function HeaderDetail({ children }: IHeaderDetail) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SHeaderDetail theme={theme}>
            {children}
        </SHeaderDetail>
    )
}

export function ContentDetail({ children }: IContentDetail) {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SContentDetail theme={theme}>
            {children}
        </SContentDetail>
    )
}
