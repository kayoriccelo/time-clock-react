import { styled } from "styled-components"


export const SScreenDetail = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 7.5rem);
    border-radius: 0.15rem;

    ${({ theme: { screens: { detail } } }) => detail.screen.style}
`

export const SHeaderDetail = styled.div`
    display: flex;
    padding: 0.6rem;
    background: white;
    border-radius: 0.15rem;
    box-shadow: 0.338rem 0.338rem 0.275rem -0.5rem #202a39; 
    
    ${({ theme: { screens: { detail } } }) => detail.header.style}

`

export const SActionsDetail = styled.div`
    ${({ theme: { screens: { detail } } }) => detail.actions.style}    
`

export const SContentDetail = styled.div`
    margin-top: 0.6rem;
    height: 100vh;

    ${({ theme: { screens: { detail } } }) => detail.content.style}
`
