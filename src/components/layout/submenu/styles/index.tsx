import { styled } from "styled-components"
import { Link } from "react-router-dom"

import { ISSubMenu } from "./interfaces"


export const SSubMenu = styled(Link) <ISSubMenu>`
    display: flex;
    align-items: center;
    padding: 0.2rem 0.4rem;
    margin: 0.50rem;
    border-right: 0.15rem solid transparent;
    border-bottom: 0.15rem solid transparent;
    border-radius: 0.25rem;
    transition: all .30s ease;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;
    
    ${({ theme: { layout: { submenu } } }) => submenu.style}
`