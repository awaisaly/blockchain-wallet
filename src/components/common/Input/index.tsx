import Input from "./Input"
import { InputType } from "./Input.types"

export const TextInput: React.FC<InputType> = props => <Input {...props} type="text" />

export const NumberInput: React.FC<InputType> = props => <Input {...props} type="number" />
