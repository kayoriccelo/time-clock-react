import styled from "styled-components"


export const SPaginationSelect = styled.select`
    height: 2rem;
    width: 3.2rem;
    text-align: center;
    background-color: white;
    color: black;
    border: 1px solid gray;
    border-radius: 4px;
    margin: 2px;
    transition: all .50s ease;
    cursor: pointer;

    &:focus-visible {
        outline: none!important;
    }
    &:disabled {
        cursor: not-allowed;
    }

    @media (max-width: 600px) {
        display: none;
    }
`
