import styled from "styled-components"


export const SSlogan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2.3rem; 
    margin-bottom: 0.9rem;
    height: 6rem;
    border-radius: 0.25rem; 

    ${({ theme: { slogan } }) => slogan.style}
`
