import { styled } from "styled-components"

import { ISLabel } from "./interfaces"


export const SLabel = styled.label<ISLabel>`
    padding: 0.15rem;
    
    ${({ size }) => size && `font-size: ${size}rem;`}
    ${({ type, theme: { components: { label } } }) => type == 'title' && `
        font-weight: 900;
        ${label.title.style}
    `}
`
