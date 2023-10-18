import { styled } from "styled-components"


export const SInputGroup = styled.div`
    position: relative;
    margin: 1rem;
`

export const SInputSpan = styled.span`
    
`

export const SInputIcon = styled.div`
    
`

export const SInput = styled.input`
    border-radius: 0.1rem;
    box-sizing: border-box;
    padding: 0.8rem 0.8rem 0.4rem 0.8rem;
    font-size: 0.9rem;
    transition: all 0.20s ease-out;

    ${({ theme: { components: { core: { input } } } }) => input.style}

    &:focus + label, text {
        font-size: 0.8rem;
        transform: translate(0, -50%);
        padding-left: 0.1rem;
        padding-right: 0.1rem;
    }

    &:focus-visible {
        outline: none;

        ${({ theme: { components: { core: { input } } } }) => input['&:focus-visible']}
    }

    &:not(input[value=""]) + label, text {
        font-size: 0.8rem;
        transform: translate(0, -50%);
        padding-left: 0.1rem;
        padding-right: 0.1rem;
    }
`

export const SInputLabel = styled.label`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    pointer-events: none;
    transition: all 0.30s ease-out;
`

export const SInputText = styled.div`
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    transition: all 0.15s ease-out;
    font-weight: 600;
    font-family: Roboto;
    background-color: white;
    color: #000000;
`
