import { useContext, useState } from "react"
import { MdDeleteForever, MdSearch } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

import { List, Search, Table, Pagination, Badge, Button } from "../../../../../components"
import { GlobalContext } from "../../../../app/contexts"

import { EditAddress } from "./edit"
import { IAddress } from "./interfaces"
import { useAddress } from "./hooks"


export function TabAddress() {
    const { global: { idCompany } } = useContext(GlobalContext)
    const [tabAddress, setTabAddress] = useState({
        search: '',
        ordernable: '',
        pagination: '&_page=1&_limit=10',
        openModal: false,
        address: {} as IAddress
    })
    const { search, ordernable, pagination } = tabAddress
    const { result } = useAddress(idCompany, search, ordernable, pagination)

    const renderMain = (record: any) => (
        <Badge type={record['main_class']}>
            {record['main']}
        </Badge>
    )

    const renderActions = (record: any) => (
        <>
            <Button
                type="warning"
                hint="Edit"
                outline={true}
                icon={<TbEdit size={20} />} onClick={() => {
                    setTabAddress({ ...tabAddress, openModal: true, address: record })
                }}
            />

            <Button
                type="danger"
                hint="Delete"
                outline={true}
                icon={<MdDeleteForever size={20} />}
            />
        </>
    )

    const fields = [
        { label: 'Public place', name: 'public_place', size: '25%', align: 'flex-start' },
        { label: 'Number', name: 'number', size: '100px', align: 'center' },
        { label: 'Neighborhood', name: 'neighborhood', size: '600px', align: 'flex-start' },
        { label: 'City', name: 'city', size: '100px', align: 'flex-start' },
        { label: 'State', name: 'state', size: '100px', align: 'center' },
        { label: 'Main', name: 'main', size: '100px', align: 'center', render: renderMain },
        { label: 'Actions', name: 'actions', size: '200px', align: 'center', render: renderActions },
    ]

    const handlerSearch = (event: any) => {
        setTabAddress({ ...tabAddress, search: event.target.value })
    }

    const handlerOrdernable = (newOrdernable: string) => {
        setTabAddress({ ...tabAddress, ordernable: newOrdernable })
    }

    const handlerPagination = (newpage: number, newPageSize: number) => {
        setTabAddress({ ...tabAddress, pagination: `&_page=${newpage}&_limit=${newPageSize}` })
    }

    return (
        <>
            <EditAddress
                openModal={tabAddress.openModal}
                onClose={() => setTabAddress({ ...tabAddress, openModal: false })}
                address={tabAddress.address}
            />

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
                        data={result.records}
                        handlerOrdernable={handlerOrdernable}
                    />
                }
                footer={
                    <Pagination data={result} handlerPagination={handlerPagination} />
                }
            />
        </>
    )
}
