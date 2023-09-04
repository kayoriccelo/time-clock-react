import { useContext } from "react"
import ThemeContext from "../../../pages/app/contexts"
import { SidebarStyled } from "./style/styled"


export function Sidebar() {
    const { theme } = useContext(ThemeContext)
    
    return (
        <SidebarStyled theme={theme}>
            Sidebar
        </SidebarStyled>
    )
}
