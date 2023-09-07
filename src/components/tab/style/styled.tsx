import { styled } from "styled-components"
import { 
    StyledTabGroupProps, StyledTabNavProps, StyledTabContentProps 
} from "./interface"


export const StyledTab = styled.div`
    
`

export const StyledTabGroup = styled.div<StyledTabGroupProps>`
    display: flex;
    margin-bottom: 0.6rem;

    ${props => props.theme.tab.group}
`

export const StyledTabNav = styled.button<StyledTabNavProps>`
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

export const StyledTabIcon = styled.span`
    padding: 0 0.3rem;
`

export const StyledTabContent = styled.div<StyledTabContentProps>`
    display: ${props => props.active ? 'flex' : 'none'};
    background-color: white;

    ${props => props.theme.tab.content}
    
`
