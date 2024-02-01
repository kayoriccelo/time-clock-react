import { styled } from "styled-components"


export const SMain = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    width: 100%;

    ${({ theme: { components: { layout: { main } } } }) => main.style}
`
