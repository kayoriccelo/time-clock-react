import { styled } from "styled-components"
import { StyledSubMenuProps } from "./interface"
import { Link } from "react-router-dom"


export const SubMenuStyled = styled(Link)<StyledSubMenuProps>`
    display: flex;
    align-items: center;
    padding: 0.4rem;
    margin-bottom: 0.15rem;
    border-right: 0.15rem solid #6e6e6e1f;
    border-bottom: 0.15rem solid #6e6e6e1f;
    border-radius: 0.25rem;
    transition: all .30s ease;
    color: rgba(103, 103, 103, 0.90);
    cursor: pointer;

    &:hover {                
        border-right: 0.15rem solid #6e6e6e1f;
        border-bottom: 0.15rem solid #6e6e6e1f;
        box-shadow: 0.500rem 0.500rem 0.400rem -0.5rem #202a39;
        
    }
    
    ${props => props.theme.submenu}
`