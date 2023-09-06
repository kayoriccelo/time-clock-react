import { Outlet } from "react-router-dom"
import { Container, Main, Sidebar, Header, Title, Breadcrumb, Content, Footer } from "../../components"


export function Home() {
    return (
        <Container>
            <Sidebar />

            <Main>
                <Header />

                <Title />
                
                <Breadcrumb />

                <Content>
                    <Outlet />
                </Content>

                <Footer />
            </Main>
        </Container>
    )
}
