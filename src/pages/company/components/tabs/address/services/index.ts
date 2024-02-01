import api from "../../../../../../services"

import { IAddress } from "../interfaces"


export function list(
    idCompany: Number, search?: String, ordernable?: String, pagination?: String
) {
    return api.get(`address?company_id=${idCompany}&q=${search}${ordernable}${pagination}`)
}

export function create(address: IAddress) {
    return api.put(`address`, address)
}

export function putAddress(address: IAddress) {
    return api.put(`address/${address.id}`, address)
}

export function remove(address: IAddress) {
    return api.delete(`address/${address.id}`)
}
