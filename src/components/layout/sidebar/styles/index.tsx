import { styled } from "styled-components"


export const SSidebar = styled.div`
    padding: 0.4rem;
    margin: 40px 0.6rem 0 0.6rem;
    width: 7rem;
    border-top-right-radius: 0.33rem;
    border-top-left-radius: 0.33rem;
    display: flex;
    flex-direction: column;
    
    ${({ theme: { layout: { sideBar } } }) => sideBar.style}
`
