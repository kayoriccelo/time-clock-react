import { IInput } from "./interfaces"
import { SInputGroup, SInput, SInputLabel, SInputIcon, SInputText } from "./styles"


export function Input({ id, name, label, value, icon, onChange }: IInput) {
    return (
        <SInputGroup>
            {/* <SInputIcon>{icon}</SInputIcon> */}

            <SInput
                value={value}
                name={name}
                onChange={onChange}
            />

            <SInputLabel>
                <SInputText>
                    {label}
                </SInputText>
            </SInputLabel>
        </SInputGroup>
    )
}
