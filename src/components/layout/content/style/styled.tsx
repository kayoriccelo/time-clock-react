import { styled } from "styled-components"


export const SContent = styled.div`
    margin-bottom: 0.6rem;
    padding-right: 0.3rem;
    height: calc(100vh - 5rem);
    max-height: calc(100vh - 5rem);
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 0.3rem;
    };
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
    }

    ${({ theme }) => theme.content}
    
`