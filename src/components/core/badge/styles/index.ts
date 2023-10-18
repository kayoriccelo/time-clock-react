import { styled } from "styled-components"

import { ISBadge } from "./interfaces"


export const SBadge = styled.div<ISBadge>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.25rem 0.5rem;
    height: fit-content;
    
    border-radius: 0.30rem;

    ${({ theme: { components: { core: { badge } } } }) => badge.style}

    ${({ type, theme: { components: { core: { badge } } } }) => (badge && type && badge[type]) && badge[type].style}
`
