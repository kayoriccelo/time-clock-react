import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FaAddressCard } from "react-icons/fa"
import { TbEdit } from "react-icons/tb"
import { FaSquarePhone } from "react-icons/fa6"

import { Detail, Button, Tab } from "../../components"
import { GlobalContext } from "../app/contexts"
import { breadcrumbs } from "../app/configs/breadcrumbs"

import { HeaderDetailCompany } from "./components/header"
import { TabAddress } from "./components/tabs/address"
import { TabContact } from "./components/tabs/contacts"


export function DetailCompany() {
    const navigate = useNavigate()
    const { global, setGlobal } = useContext(GlobalContext)

    function handlerEditClick() {
        setGlobal({
            ...global,
            title: "Edit company",
            breadcrumbs: [breadcrumbs.home, breadcrumbs.company.detail],
        })

        navigate("/registrations/company/update")
    }

    return (
        <Detail
            header={<HeaderDetailCompany />}
            actions={
                <Button
                    type="warning"
                    label="Edit"
                    icon={<TbEdit size={18} />}
                    onClick={handlerEditClick}
                />
            }
            content={
                <Tab
                    tabActiveInitial="address"
                    tabs={[
                        {
                            tab: "address",
                            label: "Address",
                            icon: <FaAddressCard size={17} />,
                            content: <TabAddress />,
                        },
                        {
                            tab: "contact",
                            label: "Contact",
                            icon: <FaSquarePhone size={17} />,
                            content: <TabContact />,
                        },
                    ]}
                />
            }
        />
    )
}
