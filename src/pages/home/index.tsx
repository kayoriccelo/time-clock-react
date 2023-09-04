import { Outlet } from "react-router-dom"
import { Container, Main, Content, Sidebar } from "../../components"


export function Home () {
    return (
        <Container>
            <Sidebar />

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
