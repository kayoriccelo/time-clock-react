import { styled } from "styled-components"
import { StyledLabelProps } from "./interface"


export const StyledLabel = styled.label<StyledLabelProps>`
    padding: 0.15rem;
    ${props => props.size && `font-size: ${props.size}rem;`}
    ${props => props.theme.label}
    ${props => props.is_title && `
        font-weight: 900;
        ${props.theme.label.title}
    `}
    ${props => props.is_value && `
        ${props.theme.label.value}
    `}
`
