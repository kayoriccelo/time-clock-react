import { useEffect, useState } from "react"

import { ISweetAlert } from "./interfaces"
import {
    SSweetAlert, SSweetAlertContainer, SSweetAlertTitle, SSweetAlertContent,
    SSweetAlertActions
} from "./styles"
import { root } from "../../../main"


export function SweetAlert({title, content, actions, size = 'normal'}: ISweetAlert) {
    const [open, setOpen] = useState(false)

    const handlerClose = () => setOpen(false)

    useEffect(() => {
        setOpen(true)
    }, [])

    root.render(
        <SSweetAlert open={open} onClick={handlerClose}>
            <SSweetAlertContainer size={size}>
                <SSweetAlertTitle>
                    {title}
                </SSweetAlertTitle>

                {content && <SSweetAlertContent>{content}</SSweetAlertContent>}

                {actions && <SSweetAlertActions>{actions}</SSweetAlertActions>}
            </SSweetAlertContainer>
        </SSweetAlert>
    )
}
