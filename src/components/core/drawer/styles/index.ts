import { styled } from "styled-components"

import { ISDrawer } from "./interfaces"


export const SDrawer = styled.div<ISDrawer>`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 5.6rem 0.75rem;
    height: calc(100vh - 8.5rem);
    width: 0;
    z-index: 99999;
    opacity: 0;
    top: 0;
    left: 8.5rem;
    transition: all .60s ease;  
    
    ${({ theme: { components: { core: { drawer } } } }) => drawer.style}
    
    ${({ open }) => open ? `
        opacity: 1; 
        width: 15rem; 
    ` : `
        opacity: 0;
        width: 0rem;
    `}

    @media (max-width: 600px) {
        background-color: white;
        width: 100vw;
        margin: 0;
        left: 0;
        transition: all .30s ease;

        ${({ open }) => open ? `
            opacity: 1; 
            height: calc(100vh);
        ` : `
            opacity: 0;
            height: 0;
        `}
    }
`

export const STitleDrawer = styled.div`
    padding: 0.6rem 0.8rem;
    margin-bottom: 0.6rem;
    text-align: center;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    font-size: 0.7rem;
    font-weight: 600;

    ${({ theme: { components: { core: { drawer } } } }) => drawer.title.style}

    @media (max-width: 600px) {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
`
