import { styled } from "styled-components"
import { StyledDrawerProps } from "./interface"

export const DrawerStyled = styled.div<StyledDrawerProps>`
    position: absolute;
    flex-direction: column;
    padding: 0.8rem;
    margin: 5.6rem 0.75rem;
    width: 15rem;
    height: calc(100vh - 9.5rem);
    z-index: 0;
    background-color: white;
    left: 9.5rem;

    ${props => props.open ? 'display: flex;' : 'display: none;' }
`