import { styled } from "styled-components"

import { ISDrawer } from "./interface"


export const SDrawer = styled.div<ISDrawer>`
    position: absolute;
    flex-direction: column;
    margin: 5.6rem 0.75rem;
    width: 0;
    height: calc(100vh - 8.5rem);
    z-index: 0;
    background-color: white;
    box-shadow: 0.438rem 0.438rem 0.375rem -0.625rem #797a7a;
    transition: all .60s ease;  
    display: flex;
    opacity: 0;
    left: 8.3rem;
    
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
    background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
    color: white;
    text-align: center;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    font-size: 0.7rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
`
