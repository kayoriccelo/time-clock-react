import { styled } from "styled-components"
import { StyledDrawerProps } from "./interface"


export const DrawerStyled = styled.div<StyledDrawerProps>`
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
    left: 0;
    
    ${props => props.open ? `
        opacity: 1; 
        width: 15rem;
        left: 8.3rem; 
    ` : `
        opacity: 0;
        width: 0rem;
        left: 0;
    `}
`

export const TitleDrawerStyle = styled.div`
    padding: 0.6rem 0.8rem;
    margin-bottom: 0.6rem;
    background-color: #1e1e2d;
    color: white;
    text-align: center;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    font-size: 0.8rem;
    font-weight: 600;
`