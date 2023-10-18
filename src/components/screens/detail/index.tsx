import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"

import { backPage } from "../../../common/useful/methods"
import { GlobalContext } from "../../../pages/app/contexts"
import { Title } from "../../core/title"
import { Breadcrumb } from "../../core/breadcrumb"
import { Button } from "../../core/button"

import { IScreenDetail } from "./interfaces"
import {
    SDetailAction, SDetailContent, SDetailGroup, SDetailGroupAction, SDetailGroupTitle, SDetailHeader, SDetailScreen
} from "./styles"


export function Detail({ header, actions, content }: IScreenDetail) {
    const navigate = useNavigate()
    const { global, setGlobal } = useContext(GlobalContext)

    const handlerBackClick = () => backPage(global, setGlobal, navigate)

    return (
        <SDetailScreen>
            <SDetailGroup>
                <SDetailGroupTitle>
                    <Title />

                    <Breadcrumb />
                </SDetailGroupTitle>


                {actions && (
                    <SDetailAction>
                        <SDetailGroupAction>
                            {actions}

                            <Button
                                type="primary"
                                label="Back"
                                icon={<TiArrowBack size={18} />}
                                onClick={handlerBackClick}
                            />
                        </SDetailGroupAction>
                    </SDetailAction>
                )}
            </SDetailGroup>

            {header && (
                <SDetailHeader>
                    {header}
                </SDetailHeader>
            )}

            {content && (
                <SDetailContent>
                    {content}
                </SDetailContent>
            )}
        </SDetailScreen>
    )
}
