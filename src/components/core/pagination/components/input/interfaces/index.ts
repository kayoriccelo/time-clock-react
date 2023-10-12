import { IEvent } from "../../../../../../common/interfaces"


export interface IPaginationInput {
    disabled: boolean, 
    value: any, 
    onChange: (event: IEvent) => void
}
