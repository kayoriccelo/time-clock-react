import { TiThMenu } from "react-icons/ti"

import { SHeader } from "./style/styled"
import { Button } from "../../button"


export function Header() {
    return (
        <SHeader>
            <Button>
                <TiThMenu size={20} />
            </Button>
        </SHeader>
    )
}
