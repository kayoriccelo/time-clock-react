import { styled } from "styled-components"

import { ISContainer } from "./interface"


export const SContainer = styled.div<ISContainer>`
    display: flex;
    height: 100vh;
    
    ${props => props.theme.background}
`
