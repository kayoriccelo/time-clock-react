import { TiThMenu } from "react-icons/ti"

import { Button } from "../../core/button"

import { SHeader } from "./styles"
import { IHeader } from "./interfaces"



export function Header({ handlerOpen }: IHeader) {
    function handlerClick() {
        handlerOpen && handlerOpen(true)
    }

    return (
        <SHeader>
            <Button icon={<TiThMenu size={20} onClick={() => handlerClick()} />} />
        </SHeader>
    )
}
