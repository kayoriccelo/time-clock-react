import { Outlet } from "react-router-dom"
import { Container, Main, Content, Sidebar } from "../../components"
import { Footer } from "../../components/layout/footer"


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

                <Footer />
            </Main>
        </Container>
    )
}
