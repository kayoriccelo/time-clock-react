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
    
    ${({ theme: { components: { core: { menu } } } }) => {
        return [
            menu.link.style,
            menu.style
        ]
    }}
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
    
    ${({ theme: { components: { core: { menu } } } }) => {
        return [
            menu.button.style,
            menu.style
        ]
    }}

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const SMenuGroup = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 8rem);
    overflow: auto;
    background-color: white;
`

export const SMenuButtonMinimize = styled.button<ISMenu>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
    
    ${({ theme: { components: { core: { menu } } } }) => {
        return [
            menu.button.style,
            menu.style
        ]
    }}
`

export const SMenuGroupMinimize = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    
    div {
        border-bottom: 1px solid #d8d4d4!important;
    }

    div > a {
        border: none!important;
        width: 100%;
    }

    div > a > svg {
        margin-right: 1rem!important;
    }
`

export const SSubMenuGroup = styled.div`
    display: none;
    height: 0;

    ${({ open }) => open && `
        display: flex;
        height: 100%;
    `}
`
