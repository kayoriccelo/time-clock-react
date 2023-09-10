import { useContext } from "react"
import { TiThMenu } from "react-icons/ti"

import { SHeader } from "./style/styled"
import { Button } from "../../button"
import { GlobalContext } from "../../../pages/app/context"


export function Header() {
    const { global } = useContext(GlobalContext)
    const { theme } = global

    return (
        <SHeader theme={theme}>
            <Button>
                <TiThMenu size={20} />
            </Button>
        </SHeader>
    )
}
