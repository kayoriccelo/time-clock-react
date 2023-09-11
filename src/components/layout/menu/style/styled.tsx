import { styled } from "styled-components"
import { Link } from "react-router-dom"

import { ISMenu } from "./interface"


export const SMenuLink = styled(Link)<ISMenu>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem;
    padding-top: 0.5rem;
    margin-bottom: 0.33rem;
    border-right: 0.20rem solid #6e6e6e1f;
    border-bottom: 0.20rem solid #6e6e6e1f;
    border-radius: 0.25rem;
    transition: all .30s ease;
    color: rgba(103, 103, 103, 0.90);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;

    &:hover {             
        background-color: #eeeded81;   
        box-shadow: 0.430rem 0.430rem 0.350rem -0.5rem #202a39;
        color: #1e1e2d;
    }
    
    ${({ theme }) => theme.menu}
`


export const SMenuButton = styled.button<ISMenu>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem;
    padding-top: 0.5rem;
    margin-bottom: 0.33rem;
    border: none;
    border-right: 0.20rem solid #6e6e6e1f;
    border-bottom: 0.20rem solid #6e6e6e1f;
    border-radius: 0.25rem;
    transition: all .30s ease;
    color: rgba(103, 103, 103, 0.90);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;
    background-color: transparent;

    &:hover {             
        background-color: #eeeded81;   
        box-shadow: 0.430rem 0.430rem 0.350rem -0.5rem #202a39;
        color: #1e1e2d;
    }
    
    ${({ theme }) => theme.menu}
`
