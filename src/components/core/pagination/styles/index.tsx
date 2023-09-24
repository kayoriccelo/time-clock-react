import styled from "styled-components"


export const SPageGroup = styled.span`
    display: flex;
    align-items: center;

    ${({ theme: { components: { core: { pagination } } } }) => pagination.group.style}
`

export const SPageButton = styled.button`
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
       
    };
    
    &:enabled {
        -webkit-animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;
	            animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;
    };

    @-webkit-keyframes flip-vertical-right {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
        }
    };

    @keyframes flip-vertical-right {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
        }
    };

    @-webkit-keyframes flip-vertical-left {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(-180deg);
                    transform: rotateY(-180deg);
        }
    };

    @keyframes flip-vertical-left {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(-180deg);
                    transform: rotateY(-180deg);
        }
    };

`

export const SPageInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.75rem;
    width: 1.6rem;
    text-align: center;
    border-radius: 4px;
    border: 1px solid transparent;
    margin: 2px;
    transition: all .50s ease;
    cursor: text;

    ${({ theme: { components: { core: { pagination } } } }) => pagination.input.style}

    &:focus-visible {
        outline: none!important;
    }
    &:disabled {
        cursor: not-allowed;
    }
`

export const SPageSelect = styled.select`
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
`

export const SPageOption = styled.option`

`