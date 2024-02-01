import useSWR from 'swr'

import { getCompany } from '../services'


export function useCompany<Data = any, Error = any>(id: number) {    
    const { data, error } = useSWR<Data, Error>(`${id}`, async id => {
        const response = await getCompany(id)

        return response.data
    })

    return { data, error }
}
