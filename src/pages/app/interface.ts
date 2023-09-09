import { ReactNode } from "react"


export interface IGlobal {
	title: string,
	breadcrumbs: Array<{
        to: string,
		title: string,
		icon: ReactNode
	}>,
	theme: {},
}

export interface IGlobalContext {
    global: IGlobal,
    handlerGlobal: (newGlobal: IGlobal) => void
}
