import styled from "styled-components"


export const SSearchInput = styled.input`
    padding: 0.45rem 0 0.45rem 1.5rem;
    border: none;
    transition: 0.6s;
    &:focus-visible {
        outline: none!important;
    }

    ${({ theme: { components: { search }} }) => search.style}
`
