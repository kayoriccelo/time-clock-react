import styled from "styled-components"


export const SPagination = styled.div`
    ${({ theme: { components: { core: { pagination } } } }) => pagination.style}
    max-width: 30rem;

    @media (max-width: 600px) {
        justify-content: center;
        width: 100%;
        box-shadow: none;
    }
`

export const SPaginationGroup = styled.div`
    display: flex;
    align-items: center;
    padding: 0.3rem;
    margin-top: 0.6rem;
    clip-path: polygon(0% 0, 100% 0%, 85% 100%, 0% 100%);
    border-right: 10rem solid transparent;
    border-top-right-radius: 1rem;

    ${({ theme: { components: { core: { pagination } } } }) => pagination.group.style}

    @media (max-width: 600px) {
        justify-content: center;
        clip-path: none;
        border-right: none;
        border-top-right-radius: none;
        border-radius: 1rem;
    }
`