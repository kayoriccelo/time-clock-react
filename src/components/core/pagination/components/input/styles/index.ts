import styled from "styled-components"


export const SPaginationInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.75rem;
    width: 1.6rem;
    text-align: center;
    border-radius: 4px;
    border: 1px solid transparent;
    margin: 2px;
    transition: all .50s ease;
    cursor: text;

    ${({ theme: { components: { core: { pagination } } } }) => pagination.input.style}

    &:focus-visible {
        outline: none!important;
    }

    &:disabled {
        cursor: not-allowed;
    }

    @media (max-width: 600px) {
        height: 2.75rem;
        width: 2.75rem;
    }
`
