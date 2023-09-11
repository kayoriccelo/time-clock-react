import { styled } from "styled-components"

import { ISTabNav, ISTabContent } from "./interface"


export const STab = styled.div`
    ${({ theme }) => theme.tab.style}
`

export const STabGroup = styled.div`
    display: flex;
    margin-bottom: 0.6rem;

    ${({ theme }) => theme.tab.group}
`

export const STabNav = styled.button<ISTabNav>`
    display: flex;
    align-items: center;
    height: 2rem;
    border: none;
    border-radius: 0.15rem;
    padding: 0.3rem 0.9rem;
    margin: 0.3rem 0.3rem 0.3rem 0;
    background-color: transparent;
    font-size: 0.8rem;
    cursor: pointer;

    ${({ active, theme }) => active && theme.tab.nav.active}
    ${({ theme }) => theme.tab.nav.style}
`

export const STabIcon = styled.span`
    padding: 0 0.3rem;
`

export const STabContent = styled.div<ISTabContent>`
    display: ${({ active }) => active ? 'flex' : 'none'};
    
    ${({ theme }) => theme.tab.content}
`
