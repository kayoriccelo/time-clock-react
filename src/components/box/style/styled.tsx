import { styled } from "styled-components"

import { ISBox } from "./interface"


export const SBox = styled.span<ISBox>`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.15rem;

    ${props => props.theme.box}
`
