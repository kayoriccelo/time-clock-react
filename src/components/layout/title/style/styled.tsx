import { styled } from "styled-components"


export const STitle = styled.div`
    margin: 0.18rem 0.3rem 0 0.3rem;
    min-width: 20vh;
    max-width: 40vh;
    border-bottom: 1px solid #1e1e2d;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.2rem;
    font-weight: 800;
    
    -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
            animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    
    @-webkit-keyframes tracking-in-expand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes tracking-in-expand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

    ${({ theme }) => theme.title}
`
