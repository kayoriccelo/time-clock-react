import { styled } from "styled-components"


export const SContent = styled.div`
    margin-bottom: 0.6rem;
    padding-right: 0.3rem;
    height: 100%;
    min-height: calc(100vh - 7rem);
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 0.3rem;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
    }

    ${({ theme: { components: { layout: { content } } } }) => content.style}

    @media (max-width: 600px) {
        box-shadow: none;
    }
`
