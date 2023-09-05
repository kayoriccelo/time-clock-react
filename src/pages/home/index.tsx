import { Outlet } from "react-router-dom"
import { Container, Main, Sidebar, Header, Breadcrumb, Content, Footer } from "../../components"


export function Home() {
    return (
        <Container>
            <Sidebar />

            <Main>
                <Header />

                <Breadcrumb />

                <Content>
                    Content

                    <Outlet />
                </Content>

                <Footer />
            </Main>
        </Container>
    )
}
