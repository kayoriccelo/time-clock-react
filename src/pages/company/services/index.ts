import api from "../../../services"
import { ICompany } from "../interfaces"


export function getCompany(id: number) {
    return api.get(`company/${id}`)
}

export function putCompany(company: ICompany) {
    return api.put(`company/${company.id}`, company)
}
