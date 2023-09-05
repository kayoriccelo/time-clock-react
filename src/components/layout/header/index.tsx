import { useContext } from "react"
import { HeaderProps } from "./interface"
import { HeaderStyled } from "./style/styled"
import { Button } from "../../button"
import { TiThMenu } from "react-icons/ti"
import { Title } from "../title"
import ThemeContext from "../../../pages/app/contexts"


export function Header(props: HeaderProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <HeaderStyled theme={theme} {...props}>
            <Button>
                <TiThMenu size={20} />
            </Button>

            <Title>
                Edit Employee
            </Title>
        </HeaderStyled>
    )
}
