import { styled } from "styled-components";

export const TitleStyled = styled.div` 
    margin: 0.18rem 0.5rem;
    padding-left: 0.9rem;
    min-width: 20vh;
    max-width: 40vh;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #282f48b0;
    font-size: 1.2rem;
    font-weight: 800;

    ${props => props.theme.title}
`