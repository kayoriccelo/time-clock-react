import { styled } from "styled-components"

import { ISActionsDetail, ISContentDetail, ISHeaderDetail } from "./interface"


export const SScreenDetail = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 13rem);
    border-radius: 0.15rem;
`

export const SHeaderDetail = styled.div<ISHeaderDetail>`
    display: flex;
    padding: 0.6rem;
    background: white;
    border-radius: 0.15rem;
    box-shadow: 0.338rem 0.338rem 0.275rem -0.5rem #202a39; 
    
    ${props => props.theme.detail.header}

`

export const SActionsDetail = styled.div<ISActionsDetail>`
    ${props => props.theme.detail.actions}    
`

export const SContentDetail = styled.div<ISContentDetail>`
    margin-top: 0.6rem;
    height: 50rem;

    ${props => props.theme.detail.content}
`
