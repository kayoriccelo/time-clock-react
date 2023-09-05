import { styled } from "styled-components"
import { StyledMenuProps } from "./interface"
import { Link } from "react-router-dom"


export const MenuStyled = styled(Link)<StyledMenuProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;
    margin-bottom: 0.33rem;
    border-right: 0.20rem solid #6e6e6e1f;
    border-bottom: 0.20rem solid #6e6e6e1f;
    border-radius: 0.25rem;
    transition: all .30s ease;
    color: rgba(103, 103, 103, 0.90);
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    &:hover {             
        background-color: #eeeded81;   
        box-shadow: 0.430rem 0.430rem 0.350rem -0.5rem #202a39;
        color: #1e1e2d;
    }
    
    ${props => props.theme.menu}
`