import { styled } from "styled-components"

import { ISLabel } from "./interfaces"


export const SLabel = styled.label<ISLabel>`
    padding: 0.15rem;
    
    ${({ size }) => size && `font-size: ${size}rem;`}
    ${({ theme }) => theme.label}
    ${({ type, theme }) => type == 'title' && `
        font-weight: 900;
        ${theme.label.title}
    `}
`
