import { styled } from "styled-components"


export const SContainer = styled.div`
    display: flex;
    height: 100vh;
        
    ${({ theme: { components: { layout: { container } } } }) => container.style}
`
