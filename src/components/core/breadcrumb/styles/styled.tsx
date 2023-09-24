import { styled } from "styled-components"


export const SBreadcrumb = styled.div`
    display: flex;
    margin: 0 0 0.6rem 0;
    padding: 0.4rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    ${({ theme: { components: { core: { breadcrumb } } } }) => breadcrumb.style}
`

export const SBreadcrumbIcon = styled.span` 
    display: flex; 
    align-items: center;
`

export const SBreadcrumbLabel = styled.span` 
    display: flex; 
    align-items: center;
    padding: 0.15rem;
`
