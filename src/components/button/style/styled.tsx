import { styled } from "styled-components"

import { ISButton } from "./interface"


export const SButton = styled.button<ISButton>`
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    border: 0px;
    cursor: pointer;

    ${({ type, theme }) => type == 'success' && `${theme.button.success}`}
    ${({ type, theme }) => type == 'primary' && `${theme.button.primary}`}
    ${({ type, theme }) => type == 'secondary' && `${theme.button.secondary}`}
    ${({ type, theme }) => type == 'danger' && `${theme.button.danger}`}
    ${({ type }) => !type && `background-color: transparent; color: white;`}

    &:hover {
        ${({ theme }) => theme.button.hover}
    };
`
