import { styled } from "styled-components"
import { StyledBreadcrumbProps } from "./interface"


export const BreadcrumbStyled = styled.div<StyledBreadcrumbProps>`
    margin: 0 0 0.9rem 0;
    padding: 0.4rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    ${props => props.theme.breadcrumb}
`
