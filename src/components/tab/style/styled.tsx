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
    border-top-right-radius: 0.15rem;
    border-top-left-radius: 0.15rem;
    padding: 0.3rem 0.9rem;
    margin: 0;
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
    width: 100%;
    -webkit-animation: text-focus-in 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-focus-in 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
       
    @-webkit-keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    };

    @keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    };

    ${({ theme }) => theme.tab.content}

`
