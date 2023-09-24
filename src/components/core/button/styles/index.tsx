import { styled } from "styled-components"

import { ISButton } from "./interfaces"


export const SButton = styled.button<ISButton>`
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    border: 0px;
    cursor: pointer;

    ${({ type, theme: { components: { core: { button } } } }) => {
        let style = ''
        if (type == 'success') style = `${button.success.style}`

        if (type == 'primary') style = `${button.primary.style}`

        if (type == 'secondary') style = `${button.secondary.style}`

        if (type == 'danger') style = `${button.danger.style}`

        if (!type) style = style + `background-color: transparent; color: white;`

        return style
    }}

    &:hover {
        ${({ theme: { components: { core: { button } } } }) => button.hover.style}
    };
`
