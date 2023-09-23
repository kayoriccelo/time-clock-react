import { styled } from "styled-components"

import { ISTabNav, ISTabContent } from "./interfaces"


export const STab = styled.div`
`

export const STabGroup = styled.div`
    display: flex;
    margin-bottom: 0.6rem;

    ${({ theme: { components: { tab } } }) => tab.group.style}
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

    ${({ theme: { components: { tab } } }) => tab.nav.style}
    ${({ active, theme: { components: { tab } } }) => active && tab.nav.active.style}
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
`
