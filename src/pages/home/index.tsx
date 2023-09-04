import { Outlet } from "react-router-dom"
import { Container, Main, Content } from "../../components"


export function Home () {
    return (
        <Container>
            <Main>
                Main

                <Content>
                    Content

                    <Outlet />
                </Content>
            </Main>
        </Container>
    )
}
