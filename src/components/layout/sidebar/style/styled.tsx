import { styled } from "styled-components"

import { ISSidebarSlogan, ISSidebar } from "./interface"


export const SSidebar = styled.div<ISSidebar>`
    padding: 0.4rem;
    margin: 40px 0.6rem 0 0.6rem;
    width: 7rem;
    border-top-right-radius: 0.33rem;
    border-top-left-radius: 0.33rem;
    display: flex;
    flex-direction: column;
    
    ${props => props.theme.sideBar}
`

export const SSidebarSlogan = styled.div<ISSidebarSlogan>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2.3rem; 
    margin-bottom: 0.9rem;
    height: 6rem;
    border-radius: 0.25rem; 

    ${props => props.theme.slogan}
`
