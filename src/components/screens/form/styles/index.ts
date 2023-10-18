import styled from "styled-components"


export const SFormScreen = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.15rem;
    margin-bottom: 1px;

    ${({ theme: { components: { screen: { form } } } }) => form.screen.style}

    @media (max-width: 600px) {
        box-shadow: none;
        justify-content: center;
        align-items: center;
    }
`

export const SFormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    }
`

export const SFormGroupTitle = styled.div`
    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
    }
`

export const SFormHeader = styled.div`
    display: flex;
    padding: 0.6rem;
    border-radius: 0.15rem;
    
    ${({ theme: { components: { screen: { form } } } }) => form.header.style}

    @media (max-width: 600px) {
        box-shadow: none;
        border-radius: 1rem;
        width: calc(100vw - 3rem);
    }
`

export const SFormGroupAction = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0.2rem;
    transition: all 0.10s ease-out;
    border-bottom-left-radius: 1rem;
    clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);

    ${({ theme: { components: { screen: { form } } } }) => form.actions.group.style} 

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
    }

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
    }

    @media (max-width: 600px) {
        clip-path: none;
        background-color: transparent;
    }
`

export const SFormAction = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    
    ${({ theme: { components: { screen: { form } } } }) => form.actions.style}

    @media (max-width: 600px) {
        position: relative;
        top: 0rem;
        right: 0rem;
        padding-top: 0;
        padding-right: 0;
        width: auto;
        border-bottom: none;
        box-shadow: none;
    }
`

export const SFormContent = styled.div`
    ${({ theme: { components: { screen: { form } } } }) => form.content.style}

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
    }

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
    }

    @media (min-width: 600px) {
        padding: 1rem;
        min-height: calc(100vh - 12.6rem);
    }

    @media (max-width: 600px) {
        box-shadow: 0 0 0.5rem -0.3rem rgba(0, 0, 0, 0.35);
        border-radius: 1rem;
        width: calc(100vw - 2rem);
        margin-bottom: 0.3rem;
    }
`
