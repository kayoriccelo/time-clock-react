import { styled } from "styled-components"

import { ISDrawer } from "./interfaces"


export const SDrawer = styled.div<ISDrawer>`
    position: absolute;
    flex-direction: column;
    margin: 5.6rem 0.75rem;
    width: 0;
    height: calc(100vh - 8.5rem);
    z-index: 99999;
    transition: all .60s ease;  
    display: flex;
    opacity: 0;
    left: 8.3rem;

    ${({ theme: { components: { core: { drawer } } } }) => drawer.style}
    
    ${({ open }) => open ? `
        opacity: 1; 
        width: 15rem; 
    ` : `
        opacity: 0;
        width: 0rem;
    `}
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
`
