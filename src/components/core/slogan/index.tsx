import { HiCubeTransparent } from "react-icons/hi"

import { SSlogan, SSloganGroup } from "./styles"


export function Slogan() {
    return (
        <SSloganGroup>
            <SSlogan>
                <HiCubeTransparent size={55} style={{ color: 'white' }} />
            </SSlogan>
        </SSloganGroup>
    )
}
