import styled from "styled-components"


export const SList = styled.div`
    width: 100%;
    height: 100%;
    
    ${({ theme: { components: { screen: { list } } } }) => list.style}
`

export const SListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.6rem;
    margin-bottom: 0.6rem;

    ${({ theme: { components: { screen: { list } } } }) => list.header.style}
`

export const SListHeaderSearch = styled.div`
    ${({ theme: { components: { screen: { list } } } }) => list.search.style}
`

export const SListHeaderAction = styled.div`
    ${({ theme: { components: { screen: { list } } } }) => list.action.style}
`

export const SListContent = styled.div`
    min-height: calc(100vh - 28.8rem);
    width: 100%;
    overflow-y: auto;

    ${({ theme: { components: { screen: { list } } } }) => list.content.style}

    @media (max-width: 600px) {
        padding: 0.5rem;
        width: calc(100% - 1rem);
    }
`

export const SListFooter = styled.div`
    ${({ theme: { components: { screen: { list } } } }) => list.footer.style}
`
