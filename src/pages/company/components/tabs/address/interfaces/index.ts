
export interface IAddress {
    id: number,
    public_place: string,
    number: string,
    neighborhood: string,
    city: string,
    state: string,
    main: boolean
}

export interface IEditAddress {
    openModal: boolean, 
    onClose: () => void
    address: IAddress
}
