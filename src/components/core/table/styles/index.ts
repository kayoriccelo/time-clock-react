import styled from "styled-components"

import { ISTableBodyColumn, ISTableHeadColumn, ISTableOrder } from "./interfaces"


export const STableContent = styled.div`
    padding: 0.6rem;
    margin-bottom: 0.1rem;

    ${({ theme: { components: { core: { table: { content } } } } }) => content.style}
`

export const STableScroller = styled.div`
    width: 100%;
    max-width: calc(100vw - 11rem);
    overflow: auto;
    margin-left: -0.3rem;

    &::-webkit-scrollbar {
        height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
    }

    ${({ theme: { components: { core: { table } } } }) => table.style}

    @media (max-width: 600px) {
        max-width: calc(100vw - 1.2rem);
    }
`

export const STable = styled.table`
    width: calc(100% - 1.5rem);
    
    @media (min-width: 1024px) {
        & > thead > tr > th:first-child {
            position: sticky; 
            left: 0.9rem;
            padding: 0.7rem 0.8rem;
            background: inherit;
        }

        & > tbody > tr > td:first-child {
            position: sticky;
            left: 0.9rem;
            padding: 0.7rem 0.8rem;
            background: inherit;
            box-shadow: 0.438rem 0rem 0.375rem -0.625rem #797a7a;
        }

        & > thead > tr > th:last-child {
            position: sticky; 
            right: -0.1rem;
            padding: 0.7rem 0.8rem;
            background: inherit;
        }

        & > tbody > tr > td:last-child {
            position: sticky;
            right: -0.1rem;
            padding: 0.7rem 0.8rem;
            background: inherit;
            box-shadow: -0.438rem 0rem 0.375rem -0.625rem #797a7a;
        }
    }
`

export const STableHead = styled.thead`
    font-size: 0.8rem;
    width: 100%;
`

export const STableHeadRow = styled.tr`
    display: flex;
    align-items: center;
    padding: 0.8rem;
    margin: 0;
    width: 100%;
    height: 1rem;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;

    ${({ theme: { components: { core: { table } } } }) => table.head.row.style}

`

export const STableHeadColumn = styled.th<ISTableHeadColumn>`
    display: flex;
    align-items: center;
    list-style-type: none;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0;
    padding: 0.4rem;
    
    ${({ align }) => align && `justify-content: ${align};`}
    width: ${({ size }) => size ? size : 'auto'};
`

export const STableOrder = styled.button<ISTableOrder>`
    display: flex;
    align-items: center;
    background: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-weight: bold;
    
    ${({ theme: { components: { core: { table } } } }) => table.head.column.style}
`

export const STableBody = styled.tbody`
    width: 100%;

    ${({ theme: { components: { core: { table } } } }) => table.body.style}
`

export const STableBodyRow = styled.tr`
    display: flex;
    margin: 0;
    padding: 0.3rem 0.5rem;
    margin: 0 0.2rem;
    width: 100%;
    
    &:nth-child(odd) {
        background-color: white;
    }

    &:nth-child(even) {
        ${({ theme: { components: { core: { table } } } }) => table.body.row.nthChild.style}
    }

	-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;

    @-webkit-keyframes swing-in-top-fwd {
        0% {
            -webkit-transform: rotateX(-100deg);
                    transform: rotateX(-100deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 0;
        }

        100% {
            -webkit-transform: rotateX(0deg);
                    transform: rotateX(0deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 1;
        }
    }
    
    @keyframes swing-in-top-fwd {
        0% {
            -webkit-transform: rotateX(-100deg);
                    transform: rotateX(-100deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 0;
        }
        
        100% {
            -webkit-transform: rotateX(0deg);
                    transform: rotateX(0deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 1;
        }
    }
`

export const STableBodyColumn = styled.td<ISTableBodyColumn>`
    display: flex;
    align-items: center;
    list-style-type: none;
    font-size: 0.8rem;
    margin: 0;
    padding: 0.4rem;

    ${({ align }) => align && `justify-content: ${align};`}
    width: ${({ size }) => size ? size : 'auto'};

    ${({ theme: { components: { core: { table } } } }) => table.body.column.style}
`
