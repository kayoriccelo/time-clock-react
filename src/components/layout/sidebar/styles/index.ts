import { styled } from "styled-components"


export const SSidebar = styled.div`
    padding: 0.4rem;
    margin: 40px 0.6rem 0 0.6rem;
    width: 8rem;
    border-top-right-radius: 0.33rem;
    border-top-left-radius: 0.33rem;
    transition: all 0.10s ease-out;

    ${({ theme: { components: { layout: { sideBar } } } }) => sideBar.style}

    @media (max-width: 600px) {
        width: 0;
        padding: 0;
        margin: 0;
    }
`
