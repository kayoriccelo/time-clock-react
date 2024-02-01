import { styled } from "styled-components"

import { ISButton } from "./interfaces"


export const SButton = styled.button<ISButton>`
    display: flex;
    margin: 0.2rem;
    border-radius: 0.2rem;
    border: 0px;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    background-color: transparent; 
    color: white;

    ${({ type, outline, theme: { components: { core: { button } } } }) => {
        let styles = []

        if (button && outline && type) {
            (button[type] && button[type].outline) && styles.push(button[type].outline.style)
        } else if (button && type) {
            button[type] && styles.push(button[type].style)
        }

        return styles
    }}

    &:hover {
        outline: 0;

        ${({ theme: { components: { core: { button } } } }) => button.hover.style}
    }

    ${({ hint }) => hint && `
        &[title]:hover::after {
            content: attr(hint);
            position: absolute;
            top: -0.7rem;
            color: white;
            background-color: #000000cc;
            padding: 0.3rem;
            border-radius: 0.3rem;
            text-transform: capitalize;
        }
    `}

    @media (max-width: 600px) {
        border-radius: 1.5rem;
    }
`

export const SButtonSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 1.5rem;
    transition: all 200ms;
    padding: 0.2rem;
    cursor: pointer;
    &:hover {
        transform: scale(.9);
        opacity: .75;
    }

    @media (max-width: 600px) {
        padding: 0.7rem 1.5rem;
    }
`

export const SButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
`

export const SButtonText = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0.3rem;
    cursor: pointer;

    ${({ theme: { components: { core: { button } } } }) => button.style}
`
