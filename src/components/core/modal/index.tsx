import { RiCloseLine } from "react-icons/ri"

import { IModal } from "./interfaces"
import { SModal, SModalContainer, SModalHeader, SModalBody, SModalFooter, SModalClose } from "./styles"


export function Modal({ open, onClose, header, body, footer, size = 'normal' }: IModal) {
    return (
        <SModal open={open}>
            <SModalContainer open={open} size={size}>
                <SModalHeader>
                    {header}

                    <SModalClose onClick={() => onClose()}>
                        <RiCloseLine />
                    </SModalClose>
                </SModalHeader>

                {body && <SModalBody>{body}</SModalBody>}

                {footer && <SModalFooter>{footer}</SModalFooter>}
            </SModalContainer>
        </SModal>
    )
}
