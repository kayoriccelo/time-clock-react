import { styled } from "styled-components"

import { ISFooter } from "./interface"


export const SFooter = styled.div<ISFooter>`
    padding: 0.5rem;
    box-shadow: 0.438rem 0.438rem 0.375rem -0.5rem #202a39;
    border-top: 0.063rem solid #202a39;
    border-top-left-radius: 0.25rem;

    ${props => props.theme.footer}
`
