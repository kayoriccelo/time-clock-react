import { styled } from "styled-components"

import { ISModal, ISModalContainer } from "./interfaces"


export const SModal = styled.div<ISModal>`
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

    ${({ theme: { components: { core: { modal } }} }) => modal.style }
`

export const SModalContainer = styled.div<ISModalContainer>`
	border-radius: 0.4rem;

	${({ size }) => {
		if (size === 'small') return 'width: 30vw;'
		if (size === 'normal') return 'width: 60vw;'
		if (size === 'large') return 'width: 90vw;'
	}}

	${({ theme: { components: { core: { modal } }} }) => modal.container.style }

    -webkit-animation: slide-in-elliptic-top-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-elliptic-top-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-in-elliptic-top-fwd {
		0% {
			-webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
					transform: translateY(-600px) rotateX(-30deg) scale(0);
			-webkit-transform-origin: 50% 100%;
					transform-origin: 50% 100%;
			opacity: 0.8;
		}
		100% {
			-webkit-transform: translateY(0) rotateX(0) scale(1);
					transform: translateY(0) rotateX(0) scale(1);
			-webkit-transform-origin: 50% 1400px;
					transform-origin: 50% 1400px;
			opacity: 1;
		}
	}

	@keyframes slide-in-elliptic-top-fwd {
		0% {
			-webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
					transform: translateY(-600px) rotateX(-30deg) scale(0);
			-webkit-transform-origin: 50% 100%;
					transform-origin: 50% 100%;
			opacity: 0.8;
		}
		100% {
			-webkit-transform: translateY(0) rotateX(0) scale(1);
					transform: translateY(0) rotateX(0) scale(1);
			-webkit-transform-origin: 50% 1400px;
					transform-origin: 50% 1400px;
			opacity: 1;
		}
	}

	@media (max-width: 600px) {
		width: 100%;
		height: 100%;
		
		-webkit-animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

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
	}
`

export const SModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.9rem;
	font-weight: bold;
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;

	${({ theme: { components: { core: { modal } }} }) => modal.header.style }

	@media (max-width: 600px) {
		padding: 1.5rem;
	}
	
`

export const SModalClose = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;

	${({ theme: { components: { core: { modal } }} }) => modal.header.close.style }
`

export const SModalBody = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.6rem;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	max-height: calc(100vh - 10rem);
	overflow-y: auto;

	${({ theme: { components: { core: { modal } }} }) => modal.body.style }

	@media (max-width: 600px) {
		height: 100%;
	}
`

export const SModalFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0.6rem;
`
