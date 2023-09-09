import { styled } from "styled-components"

import { ISLabel } from "./interface"


export const SLabel = styled.label<ISLabel>`
    padding: 0.15rem;
    
    ${props => props.size && `font-size: ${props.size}rem;`}
    ${props => props.theme.label}
    ${props => props.is_title && `
        font-weight: 900;
        ${props.theme.label.title}
    `}
`
