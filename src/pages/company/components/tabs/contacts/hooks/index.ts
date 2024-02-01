import useSWR from 'swr'

import { list } from '../services'


export function useContacts<Data = { records: [], totalRecords: number }, Error = any>(
    idCompany: number, search?: string, ordernable?: string, pagination?: string
) {
    const { data, error } = useSWR<Data, Error>(
        `contact/company_id${idCompany}&q=${search}${ordernable}${pagination}`,
        async url => {
            const response = await list(idCompany, search, ordernable, pagination)

            return { records: response.data, totalRecords: response.headers['x-total-count'] }
        }
    )

    return {
        contacts: { records: data ? data.records : [], totalRecords: data ? data.totalRecords : 0 },
        error
    }
}
