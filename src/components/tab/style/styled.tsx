import { styled } from "styled-components"

import { ISTabGroup, ISTabNav, ISTabContent } from "./interface"


export const STab = styled.div`
    
`

export const STabGroup = styled.div<ISTabGroup>`
    display: flex;
    margin-bottom: 0.6rem;

    ${props => props.theme.tab.group}
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

    ${props => props.theme.tab.nav}
    ${props => props.active && props.theme.tab.active}
`

export const STabIcon = styled.span`
    padding: 0 0.3rem;
`

export const STabContent = styled.div<ISTabContent>`
    display: ${props => props.active ? 'flex' : 'none'};
    background-color: white;

    ${props => props.theme.tab.content}
`
