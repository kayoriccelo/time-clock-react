import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MdSaveAs } from "react-icons/md"

import { Button, Form } from "../../components"
import { GlobalContext } from "../app/contexts"
import { IFormField } from "../../components/screens/form/interfaces"
import { backPage } from "../../common/useful/methods"

import { useCompany } from "./hooks"
import { ICompany } from "./interfaces"
import { putCompany } from "./services"

export function EditCompany() {
    const navigate = useNavigate()
    const { global, setGlobal } = useContext(GlobalContext)
    const { idCompany } = global
    const { data } = useCompany(idCompany)
    const [company, setCompany] = useState<ICompany>()

    useEffect(() => {
        data && setCompany(data)
    }, [data])

    const handlerCompany = (data: ICompany) => setCompany(data)

    const handlerSave = () => {
        // TODO - Kayo - create a sweet alert for confirmation

        company && putCompany(company)

        backPage(global, setGlobal, navigate)
    }

    return company ? (
        <Form
            actions={
                <Button
                    type="success"
                    label="Save"
                    icon={<MdSaveAs size={18} />}
                    onClick={() => handlerSave()}
                />
            }
            fields={
                [
                    {
                        id: "id-number",
                        name: "number",
                        type: "input",
                        title: "Number",
                        value: company.number,
                        onChange: (event: any) =>
                            handlerCompany({
                                ...company,
                                number: event.target.value,
                            }),
                    },
                    {
                        id: "id-name",
                        name: "name",
                        type: "input",
                        title: "Name",
                        value: company.name,
                        onChange: (event: any) =>
                            handlerCompany({
                                ...company,
                                name: event.target.value,
                            }),
                    },
                    {
                        id: "id-status",
                        name: "status",
                        type: "select",
                        title: "Status",
                        value: company.status,
                        onChange: (event: any) =>
                            handlerCompany({
                                ...company,
                                status: event.target.value,
                            }),
                    },
                ] as Array<IFormField>
            }
        />
    ) : (
        <></>
    )
}
