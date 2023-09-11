
export interface IGlobal {
	title: string,
	breadcrumbs: Array<{
		to: string,
		title: string
	}>,
	theme: {},
}

export interface IGlobalContext {
	global: IGlobal,
	handlerGlobal: (newGlobal: IGlobal) => void
}
