import { styled } from "styled-components"

import { ISButton } from "./interfaces"


export const SButton = styled.button<ISButton>`
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    border: 0px;
    cursor: pointer;

    ${({ type, theme: { button } }) => type == 'success' && `${button.success.style}`}
    ${({ type, theme: { button } }) => type == 'primary' && `${button.primary.style}`}
    ${({ type, theme: { button } }) => type == 'secondary' && `${button.secondary.style}`}
    ${({ type, theme: { button } }) => type == 'danger' && `${button.danger.style}`}
    ${({ type }) => !type && `background-color: transparent; color: white;`}

    &:hover {
        ${({ theme: { components: { button } } }) => button.hover.style}
    };
`
