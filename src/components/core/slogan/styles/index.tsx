import styled from "styled-components"


export const SSloganGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2.3rem; 
    margin-bottom: 0.9rem;
    height: 6rem;
    border-radius: 0.25rem; 

    ${({ theme: { components: { core: { slogan } } } }) => slogan.style}

`

export const SSlogan = styled.div`
    -webkit-animation: rotate-center 10s linear infinite both;
	        animation: rotate-center 10s linear infinite both;
   
    @-webkit-keyframes rotate-center {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
                    opacity: 0;
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
                    opacity: 1;

        }
    }
    
    @keyframes rotate-center {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
                    opacity: 0.5;
        }
        50% {
            -webkit-transform: rotate(180deg);
                    transform: rotate(180deg);
                    opacity: 1;
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
                    opacity: 0.5;
        }
    }

    @media (max-width: 600px) {
        -webkit-animation: none;
                animation: none;
    }
`
