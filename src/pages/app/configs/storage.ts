import { IGlobal } from "../interfaces"


export function getLocalStorage(global: IGlobal) {
	const titleStorage = localStorage.getItem("title")
	const breadcrumbsStorage = localStorage.getItem("breadcrumbs")
	const themeStorage = localStorage.getItem("theme")

	const title = titleStorage ? titleStorage : global.title
	const breadcrumbs = breadcrumbsStorage ? JSON.parse(breadcrumbsStorage) : global.breadcrumbs
	const theme = themeStorage ? JSON.parse(themeStorage) : global.theme

	return { title, breadcrumbs, theme } as IGlobal
}


export function setLocalStorage(newGlobal: IGlobal) {
	localStorage.setItem("title", newGlobal.title)
	localStorage.setItem("breadcrumbs", JSON.stringify(newGlobal.breadcrumbs))
	localStorage.setItem("theme", JSON.stringify(newGlobal.theme))
}
