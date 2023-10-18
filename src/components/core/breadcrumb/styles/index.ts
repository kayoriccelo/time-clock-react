import { styled } from "styled-components"


export const SBreadcrumb = styled.div`
    display: flex;
    margin: 0 0 0.6rem 0;
    padding: 0.4rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    ${({ theme: { components: { core: { breadcrumb } } } }) => breadcrumb.style}

    transition: all 0.10s ease-out;

    @media (max-width: 600px) {
        display: none;
    }
`

export const SBreadcrumbGroup = styled.div`
    display: flex;
`

export const SBreadcrumbIcon = styled.span` 
    display: flex; 
    align-items: center;
`

export const SBreadcrumbLabel = styled.button` 
    display: flex; 
    align-items: center;
    padding: 0.15rem;
    border: none;
    transition: 0.6s;
    background-color: transparent;
    cursor: pointer;
    
    &:hover {
        ${({ theme: { components: { core: { breadcrumb } } } }) => breadcrumb.label.hover.style}
    }
`
