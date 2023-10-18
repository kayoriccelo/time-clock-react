import { styled } from "styled-components"


export const SHeader = styled.div` 
    margin: 0.6rem 0 0.6rem 0;
    padding: 0.4rem;
    border-bottom: 0.063rem solid transparent;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    display: flex;

    ${({ theme: { components: { layout: { header } } } }) => header.style}
`