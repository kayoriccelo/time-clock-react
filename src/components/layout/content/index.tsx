import { IContent } from "./interface"
import { SContent } from "./style/styled"


export function Content (props: IContent) {
    return (
        <SContent>
            {props.children}
        </SContent>
    )
}
