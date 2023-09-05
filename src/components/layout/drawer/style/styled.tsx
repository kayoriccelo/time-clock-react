import { styled } from "styled-components"
import { StyledDrawerProps } from "./interface"


export const DrawerStyled = styled.div<StyledDrawerProps>`
    position: absolute;
    flex-direction: column;
    margin: 5.6rem 0.75rem;
    width: 15rem;
    height: calc(100vh - 8.5rem);
    z-index: 0;
    background-color: white;
    left: 9rem;
    box-shadow: 0.438rem 0.438rem 0.375rem -0.625rem #797a7a;

    ${props => props.open ? 'display: flex;' : 'display: none;' }
`

export const TitleDrawerStyle = styled.div`
    padding: 0.6rem 0.8rem;
    margin-bottom: 0.8rem;
    background-color: #1e1e2d;
    color: white;
    text-align: center;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    font-size: 0.8rem;
    font-weight: 600;
`