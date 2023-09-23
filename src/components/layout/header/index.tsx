import { TiThMenu } from "react-icons/ti"

import { Button } from "../../core/button"

import { SHeader } from "./styles"


export function Header() {
    return (
        <SHeader>
            <Button>
                <TiThMenu size={20} />
            </Button>
        </SHeader>
    )
}
