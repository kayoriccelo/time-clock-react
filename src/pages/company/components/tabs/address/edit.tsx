import { useEffect, useState } from "react"
import { MdSaveAs } from "react-icons/md"
import { ImCancelCircle } from "react-icons/im"

import { Button, Input, Modal, SweetAlert } from "../../../../../components"
import { IEvent } from "../../../../../common/interfaces"

import { IAddress, IEditAddress } from "./interfaces"
import { putAddress } from "./services"


export function EditAddress({ openModal, onClose, address }: IEditAddress) {
    const [editAddress, setEditAddress] = useState({} as IAddress)

    const handlerAddress = (field: any, value: any) => {
        setEditAddress({ ...address, [field]: value })
    }

    const handlerSave = () => {

        <SweetAlert key={`tst-${address.id}`} title="Confirmation" open={true} content={<div>Want save change?</div>}/>
        
        // if (editAddress) {
        //     putAddress(editAddress).then(({ status }) => {
        //         if (status == 200) {
        //             // TODO - Kayo Riccelo: uses Sweetalert component.
        //             alert(`All right.`)

        //             onClose()
        //         } else if (status != 200) alert(`Ops, error.`)
        //     })
        // }
    }

    useEffect(() => {
        setEditAddress(address)
    }, [address])

    return (
        <Modal
            size="small"
            open={openModal}
            onClose={onClose}
            header={'Edit Address'}
            body={
                <>

                    <Input
                        id="public_place"
                        name="public_place"
                        label="Public place"
                        value={editAddress['public_place']}
                        onChange={(event: IEvent) => handlerAddress(
                            'public_place', event.currentTarget.value
                        )}
                    />

                    <Input
                        id="number"
                        name="number"
                        label="Number"
                        value={editAddress['number']}
                        onChange={(event: IEvent) => handlerAddress(
                            'number', event.currentTarget.value
                        )}
                    />

                    <Input
                        id="neighborhood"
                        name="neighborhood"
                        label="Neighborhood"
                        value={editAddress['neighborhood']}
                        onChange={(event: IEvent) => handlerAddress(
                            'neighborhood', event.currentTarget.value
                        )}
                    />

                    <Input
                        id="city"
                        name="city"
                        label="City"
                        value={editAddress['city']}
                        onChange={(event: IEvent) => handlerAddress(
                            'city', event.currentTarget.value
                        )}
                    />

                    <Input
                        id="state"
                        name="state"
                        label="State"
                        value={editAddress['state']}
                        onChange={(event: IEvent) => handlerAddress(
                            'state', event.currentTarget.value
                        )}
                    />

                    {/* <Input
                        id="main"
                        name="main"
                        label="Main"
                        value={editAddress['main']}
                        onChange={(event: IEvent) => handlerAddress('main', event.currentTarget.value)}
                    /> */}
                </>
            }
            footer={
                <>
                    <Button
                        type="success"
                        label="Save"
                        icon={<MdSaveAs size={18} />}
                        onClick={handlerSave}
                    />
                    <Button
                        type="danger"
                        label="Cancel"
                        icon={<ImCancelCircle size={18} />}
                        onClick={onClose}
                    />
                </>
            }
        />
    )
}
