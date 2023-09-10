import { styled } from "styled-components"

import { ISButton } from "./interface"


export const SButton = styled.button<ISButton>`
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    border: 0px;
    cursor: pointer;

    ${props => props.type == 'success' && `${props.theme.button.success}`}
    ${props => props.type == 'primary' && `${props.theme.button.primary}`}
    ${props => props.type == 'secondary' && `${props.theme.button.secondary}`}
    ${props => props.type == 'danger' && `${props.theme.button.danger}`}
    ${props => !props.type && `background-color: transparent; color: white;`}

    &:hover {
        ${props => props.theme.button.hover}
    };
`
