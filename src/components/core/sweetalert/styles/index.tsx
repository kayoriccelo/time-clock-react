import { styled } from "styled-components"

import { ISSweetAlert, ISSweetAlertContainer } from "./interfaces"


export const SSweetAlert = styled.div<ISSweetAlert>`
    display: ${({ open }) => open ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
	border-radius: 0.4rem;

    ${({ theme: { components: { core: { sweetalert } }} }) => sweetalert.style }
`

export const SSweetAlertContainer = styled.div<ISSweetAlertContainer>`
	border-radius: 0.4rem;

	${({ size }) => {
		if (size === 'small') return 'width: 30vw;'
		if (size === 'normal') return 'width: 60vw;'
		if (size === 'large') return 'width: 90vw;'
	}}

	${({ theme: { components: { core: { sweetalert } }} }) => sweetalert.container.style }

    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    @-webkit-keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
                    transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }

    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
                    transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }

	@media (max-width: 600px) {
		width: 100%;
		height: 100%;
	}
`

export const SSweetAlertTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.9rem;
	font-weight: bold;
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;

	${({ theme: { components: { core: { sweetalert } }} }) => sweetalert.title.style }

	@media (max-width: 600px) {
		padding: 1.5rem;
	}
	
`

export const SSweetAlertContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.6rem;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	max-height: calc(100vh - 10rem);
	overflow-y: auto;

	${({ theme: { components: { core: { sweetalert } }} }) => sweetalert.body.style }

	@media (max-width: 600px) {
		height: 100%;
	}
`

export const SSweetAlertActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0.6rem;
`

export const SSweetAlertConfirm = styled.button`
	
`

export const SSweetAlertCancel = styled.button`
	
`
