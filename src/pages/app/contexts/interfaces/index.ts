import { IGlobal } from "../../interfaces"


export interface IGlobalContext {
	global: IGlobal,
	setGlobal: (newGlobal: IGlobal) => void
}
