import { useContext } from "react"

import { Badge, Box, Label } from "../../../../components"
import { GlobalContext } from "../../../app/contexts"
import { useCompany } from "../../hooks"


export function HeaderDetailCompany() {
    const { global } = useContext(GlobalContext)
    const { idCompany } = global
    const { data } = useCompany(idCompany)
    const company = data

    return (
        company && <>
            <Box>
                <Label type='title' size='0.8'>
                    Number
                </Label>

                <Label type='value' size='0.7'>
                    {company.number}
                </Label>
            </Box>

            <Box>
                <Label type='title' size='0.8'>
                    Name
                </Label>

                <Label type='value' size='0.7'>
                    {company.name}
                </Label>
            </Box>

            <Box>
                <Label type='title' size='0.8'>
                    Status
                </Label>

                <Label type='value' size='0.7'>
                    <Badge type={company.status_class}>
                        {company.status}
                    </Badge>
                </Label>
            </Box>
        </>
    )
}
