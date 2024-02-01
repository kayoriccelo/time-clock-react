import { styled } from "styled-components"

import { ISTabNav, ISTabContent } from "./interfaces"


export const STab = styled.div`
`

export const STabNavGroup = styled.div`
    display: flex;
    padding: 0.6rem;
    margin-bottom: 0.6rem;

    ${({ theme: { components: { core: { tab } } } }) => tab.nav.group.style}
`

export const STabGroup = styled.div`
    display: flex;

    ${({ theme: { components: { core: { tab } } } }) => tab.group.style}
`

export const STabNav = styled.a<ISTabNav>`
    display: flex;
    align-items: center;
    height: 1.6rem;
    border: none;
    border-top-right-radius: 0.15rem;
    border-top-left-radius: 0.15rem;
    padding: 0.3rem 0.9rem;
    margin: 0;
    background-color: transparent;
    font-size: 0.8rem;
    cursor: pointer;

    ${({ active, theme: { components: { core: { tab } } } }) => {
        let styles = []

        styles.push(tab.nav.style)        
        active && styles.push(tab.nav.active.style)

        return styles
    }}
`

export const STabIcon = styled.span`
    padding: 0 0.3rem;
`

export const STabContent = styled.div<ISTabContent>`
    display: ${({ active }) => active ? 'flex' : 'none'};
    width: 100%;
`
