import { styled } from "styled-components"

import { ISBreadcrumb } from "./interface"


export const SBreadcrumb = styled.div<ISBreadcrumb>`
    display: flex;
    margin: 0 0 0.6rem 0;
    padding: 0.4rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    ${props => props.theme.breadcrumb}
`

export const SBreadcrumbIcon = styled.span` 
    display: flex; 
    align-items: center;
    padding: 0.25rem;
`

export const SBreadcrumbLabel = styled.span` 
    display: flex; 
    align-items: center;
    padding: 0.25rem;
`
