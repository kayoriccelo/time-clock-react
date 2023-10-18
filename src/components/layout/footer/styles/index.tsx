import { styled } from "styled-components"


export const SFooter = styled.div`
    padding: 0.5rem;
    border-top-left-radius: 0.25rem;

    ${({ theme: { components: { layout: { footer } } } }) => footer.style}
`
