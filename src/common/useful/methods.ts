import { IGlobal } from "../../pages/app/interfaces"


export function backPage(
    global: IGlobal, setGlobal: (global: IGlobal) => void, navigate: (value: string) => void
) {
    const newBreadcrumbs = [...global.breadcrumbs]
    const lastBreadcrumb = newBreadcrumbs.slice(-1)[0]

    lastBreadcrumb && navigate(lastBreadcrumb.to)

    newBreadcrumbs.pop()

    setGlobal({
        ...global,
        title: lastBreadcrumb ? lastBreadcrumb.title : global.title,
        breadcrumbs: newBreadcrumbs
    })
}
