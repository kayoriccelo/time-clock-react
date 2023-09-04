import { Outlet } from "react-router-dom"
import { Container, Content } from "../../components"


export function Home () {
    return (
        <Container>
            Home
            
            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}
