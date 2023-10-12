import styled from "styled-components"

import { ISPaginationButton } from "./interfaces"


export const SPaginationButton = styled.button<ISPaginationButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 4px;
    margin: 2px;
    transition: all .50s ease;
    border: none;
    cursor: pointer;

    ${({ theme: { components: { core: { pagination } } } }) => pagination.button.style}

    &:disabled {
        ${({ theme: { components: { core: { pagination } } } }) => pagination.button.disabled.style}
        
        cursor: not-allowed;
        -webkit-animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;
	            animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;
       
    }
    
    &:enabled {
        -webkit-animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;
	            animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;
    }

    @-webkit-keyframes flip-vertical-right {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
        }
    }

    @keyframes flip-vertical-right {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
        }
    }

    @-webkit-keyframes flip-vertical-left {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(-180deg);
                    transform: rotateY(-180deg);
        }
    }

    @keyframes flip-vertical-left {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(-180deg);
                    transform: rotateY(-180deg);
        }
    }

    @media (max-width: 600px) {
        height: 3rem;
        width: 3rem;
        ${({ hiddenMobile }) => hiddenMobile && `display: none;`}
    }
`