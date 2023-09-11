import { styled } from "styled-components"
import { Link } from "react-router-dom"

import { ISSubMenu } from "./interface"


export const SSubMenu = styled(Link)<ISSubMenu>`
    display: flex;
    align-items: center;
    padding: 0.2rem 0.4rem;
    margin: 0.50rem;
    border-right: 0.15rem solid #6e6e6e1f;
    border-bottom: 0.15rem solid #6e6e6e1f;
    border-radius: 0.25rem;
    transition: all .30s ease;
    color: rgba(103, 103, 103, 0.90);
    cursor: pointer;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;

    &:hover {  
        background-color: #eeeded81;                  
        box-shadow: 0.430rem 0.430rem 0.350rem -0.5rem #202a39;
        color: #1e1e2d;
    }
    
    ${({ theme }) => theme.submenu}
`