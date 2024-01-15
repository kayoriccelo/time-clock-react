import { styled } from "styled-components"


export const SFooter = styled.div`
    padding: 0.5rem;
    border-top-left-radius: 0.25rem;
    transition: all 0.10s ease-out;

    ${({ theme: { components: { layout: { footer } } } }) => footer.style}

    @media (max-width: 600px) {
        display: none;
    }
`
