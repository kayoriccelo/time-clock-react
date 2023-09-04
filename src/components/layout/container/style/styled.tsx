import { styled } from "styled-components"
import { StyledContainerProps } from "./interface"


export const ContainerStyled = styled.div<StyledContainerProps>`
    display: flex;
    height: 100vh;
    
    ${props => props.theme.background}
`
