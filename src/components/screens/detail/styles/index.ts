import { styled } from "styled-components"


export const SDetailScreen = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.15rem;
    margin-bottom: 1px;

    ${({ theme: { components: { screen: { detail } } } }) => detail.screen.style}

    @media (max-width: 600px) {
        box-shadow: none;
        justify-content: center;
        align-items: center;
    }
`

export const SDetailGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    }
`

export const SDetailGroupTitle = styled.div`
    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
    }    
`

export const SDetailHeader = styled.div`
    display: flex;
    padding: 0.6rem;
    border-radius: 0.15rem;
    margin-bottom: 0.6rem;
    
    ${({ theme: { components: { screen: { detail } } } }) => detail.header.style}

    @media (max-width: 600px) {
        box-shadow: 0 0 0.5rem -0.3rem rgba(0, 0, 0, 0.35);
        border-radius: 1rem;
        width: calc(100vw - 3.2rem);
    }

`

export const SDetailGroupAction = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0.2rem;
    transition: all 0.10s ease-out;
    border-bottom-left-radius: 1rem;
    clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);

    ${({ theme: { components: { screen: { detail } } } }) => detail.actions.group.style} 

    @media (max-width: 600px) {
        clip-path: none;
        background-color: transparent;
    }
`

export const SDetailAction = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
        
    ${({ theme: { components: { screen: { detail } } } }) => detail.actions.style} 

    @media (max-width: 600px) {
        position: relative;
        top: 0rem;
        right: 0rem;
        padding-top: 0;
        padding-right: 0;
        width: auto;
        border-bottom: none;
        box-shadow: none;
    }
`

export const SDetailContent = styled.div`    
    ${({ theme: { components: { screen: { detail } } } }) => detail.content.style}

    @media (max-width: 600px) {
        box-shadow: 0 0 0.5rem -0.3rem rgba(0, 0, 0, 0.35);
        border-radius: 1rem;
        width: calc(100vw - 2rem);
        margin-bottom: 0.3rem;
    }
`
