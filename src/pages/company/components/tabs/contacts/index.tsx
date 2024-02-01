import { useContext, useState } from "react"
import { MdSearch } from "react-icons/md"

import { List, Search, Table, Pagination } from "../../../../../components"
import { GlobalContext } from "../../../../app/contexts"

import { useContacts } from "./hooks"


const fields = [
    { label: 'Contact', name: 'value', size: '60%' },
    { label: 'Type', name: 'type', size: '20%', align: 'center' },
    { label: 'Main', name: 'main', size: '20%', align: 'center' },
]

export function TabContact() {
    const { global: { idCompany } } = useContext(GlobalContext)
    const [search, setSearch] = useState('')
    const [ordernable, setOrdernable] = useState('')
    const [pagination, setPagination] = useState('')
    const { contacts } = useContacts(idCompany, search, ordernable, pagination)

    const handlerSearch = (event: any) => setSearch(event.target.value)
    const handlerOrdernable = (newOrdernable: string) => setOrdernable(newOrdernable)
    const handlerPagination = (newpage: number, newPageSize: number) => {
        setPagination(`&_page=${newpage}&_limit=${newPageSize}`)
    }

    return (
        <List
            search={
                <Search
                    value={search}
                    onChange={handlerSearch}
                    icon={<MdSearch style={{ position: 'absolute', padding: 7 }} />}
                />
            }
            content={
                <Table
                    fields={fields}
                    data={contacts.records}
                    handlerOrdernable={handlerOrdernable}
                />
            }
            footer={
                <Pagination data={contacts} handlerPagination={handlerPagination} />
            }
        />
    )
}
