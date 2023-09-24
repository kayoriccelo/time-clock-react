import { styled } from "styled-components"


export const SBox = styled.span`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.15rem;

    ${({ theme: { components: { core: { box } } } }) => box.style}
`
