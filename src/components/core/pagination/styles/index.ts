import styled from "styled-components"


export const SPagination = styled.div`
    display: flex;
    align-items: center;

    ${({ theme: { components: { core: { pagination } } } }) => pagination.group.style}

    @media (max-width: 600px) {
        justify-content: center;
        padding: 1rem;
    }
`
