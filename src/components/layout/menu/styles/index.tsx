import { styled } from "styled-components"
import { Link } from "react-router-dom"

import { ISMenu } from "./interfaces"


export const SMenuLink = styled(Link) <ISMenu>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem;
    padding-top: 0.5rem;
    margin-bottom: 0.33rem;
    border-right: 0.20rem solid transparent;
    border-bottom: 0.20rem solid transparent;
    border-radius: 0.25rem;
    transition: all .30s ease;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;
    
    ${({ theme: { layout: { menu } } }) => menu.link.style}
    ${({ theme: { layout: { menu } } }) => menu.style}
`


export const SMenuButton = styled.button<ISMenu>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem;
    padding-top: 0.5rem;
    margin-bottom: 0.33rem;
    border: none;
    border-right: 0.20rem solid transparent;
    border-bottom: 0.20rem solid transparent;
    border-radius: 0.25rem;
    transition: all .30s ease;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;
    
    ${({ theme: { layout: { menu } } }) => menu.button.style}
    ${({ theme: { layout: { menu } } }) => menu.style}
`
