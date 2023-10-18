import { IActionsDetail, IContentDetail, IHeaderDetail, IScreenDetail } from "./interfaces"
import { SActionsDetail, SContentDetail, SHeaderDetail, SScreenDetail } from "./styles"
import { Title } from "../../layout/title"
import { Breadcrumb } from "../../layout/breadcrumb"


export function ScreenDetail({ children }: IScreenDetail) {
    return (
        <SScreenDetail>
            <Title />
                
            <Breadcrumb />
            
            {children}
        </SScreenDetail>
    )
}

export function ActionsDetail({ children }: IActionsDetail) {
    return (
        <SActionsDetail>
            {children}
        </SActionsDetail>
    )
}

export function HeaderDetail({ children }: IHeaderDetail) {
    return (
        <SHeaderDetail>
            {children}
        </SHeaderDetail>
    )
}

export function ContentDetail({ children }: IContentDetail) {
    return (
        <SContentDetail>
            {children}
        </SContentDetail>
    )
}
