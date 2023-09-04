import { Outlet } from "react-router-dom"
import { Container, Main, Sidebar, Header, Content, Footer } from "../../components"


export function Home() {
    return (
        <Container>
            <Sidebar />

            <Main>
                <Header />

                <Content>
                    Content

                    <Outlet />
                </Content>

                <Footer />
            </Main>
        </Container>
    )
}
