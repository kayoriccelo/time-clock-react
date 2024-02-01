import api from "../../../../../../services"


export function list(
    idCompany: number, search?: string, ordernable?: string, pagination?: string
) {
    return api.get(`contact?company_id=${idCompany}&q=${search}${ordernable}${pagination}`)
}
