import { styled } from "styled-components"
import { StyledBoxProps } from "./interface"


export const StyledBox = styled.span<StyledBoxProps>`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.15rem;

    ${props => props.theme.box}
`
