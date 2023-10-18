import styled from "styled-components"

import { ISTableBodyColumn, ISTableHeadColumn, ISTableOrder } from "./interfaces"


export const STable = styled.table`
    width: 100%;
`

export const STableHead = styled.thead`
    font-size: 0.8rem;
`

export const STableHeadRow = styled.tr`
    display: flex;
    align-items: center;
    padding: 0.8rem;
    margin: 0;
    height: 1rem;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;

    ${({ theme: { components: { core: { table } } } }) => table.head.row.style}
`

export const STableHeadColumn = styled.th<ISTableHeadColumn>`
    list-style-type: none;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0;
    padding: 0.4rem;

    width: ${({ size }) => size ? size : 'auto'};
    ${({ align }) => align && `text-align: ${align};`}
`

export const STableOrder = styled.button<ISTableOrder>`
    display: flex;
    align-items: center;
    justify-content: ${({ align }) => align ? align : 'flex-start'};
    width: 100%;
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
    ${({ theme: { components: { core: { table } } } }) => table.body.style}
`

export const STableBodyRow = styled.tr`
    display: flex;
    margin: 0;
    padding: 0.3rem 0.5rem;
    margin: 0 0.2rem;
    
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
    list-style-type: none;
    font-size: 0.8rem;
    margin: 0;
    padding: 0.4rem;

    width: ${({ size }) => size ? size : 'auto'};
    ${({ align }) => align && `text-align: ${align};`}
    ${({ theme: { components: { core: { table } } } }) => table.body.column.style}
`
