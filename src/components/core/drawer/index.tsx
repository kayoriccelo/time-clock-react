import { IDrawer } from "./interfaces"
import { SDrawer } from "./styles"


export function Drawer({ children, open }: IDrawer) {
    return (
        <SDrawer open={open}>
            {children}
        </SDrawer>
    )
}
