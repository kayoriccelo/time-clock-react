import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"

import { Breadcrumb, Button, Input, Title } from "../.."
import { GlobalContext } from "../../../pages/app/contexts"
import { backPage } from "../../../common/useful/methods"

import { IForm } from "./interfaces"
import {
    SFormScreen, SFormAction, SFormContent, SFormGroup, SFormGroupTitle, SFormHeader, SFormGroupAction
} from "./styles"



export function Form({ header, fields, actions }: IForm) {
    const navigate = useNavigate()
    const { global, setGlobal } = useContext(GlobalContext)

    const handlerBackClick = () => backPage(global, setGlobal, navigate)

    return (
        <SFormScreen>
            <SFormGroup>
                <SFormGroupTitle>
                    <Title />

                    <Breadcrumb />
                </SFormGroupTitle>

                {actions && (
                    <SFormAction>
                        <SFormGroupAction>
                            {actions}

                            <Button
                                type="primary"
                                label="Back"
                                icon={<TiArrowBack size={18} />}
                                onClick={handlerBackClick}
                            />
                        </SFormGroupAction>
                    </SFormAction>
                )}
            </SFormGroup>

            {header && (
                <SFormHeader>
                    {header}
                </SFormHeader>
            )}

            <SFormContent>
                {fields && fields.map(field => (
                    field.type == 'input' && (
                        <Input
                            id={field.id}
                            label={field.title}
                            name={`${field.name}`}
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )
                ))}
            </SFormContent>
        </SFormScreen>
    )
}
