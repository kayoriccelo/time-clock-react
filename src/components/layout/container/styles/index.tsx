import { styled } from "styled-components"


export const SContainer = styled.div`
    display: flex;
    height: 100vh;
    
    ${({ theme: { background } }) => background.style}
`
