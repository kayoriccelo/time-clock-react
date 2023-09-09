import { useCallback, useMemo, useState } from "react"
import { RouterProvider } from "react-router-dom"
import { MdDashboardCustomize } from "react-icons/md"

import { routers } from "./routes"
import { style } from "../../common/theme/styled"
import { IGlobal } from "./interface"
import { GlobalContext } from "./contexts"


function App() {
	const [global, useGlobal] = useState<IGlobal>({
		title: 'Home',
		breadcrumbs: [{ to: '/', title: 'Home', icon: <MdDashboardCustomize /> }],
		theme: style.light
	})

	const handlerGlobal = useCallback((newGlobal: {}) => {
		useGlobal({ ...global, ...newGlobal })
	}, [])

	const value = useMemo(() => ({
		global,
		handlerGlobal
	}), [global])

	return (
		<GlobalContext.Provider value={value}>
			<RouterProvider
				router={routers}
				fallbackElement={<p>Initial Load...</p>}
			/>
		</GlobalContext.Provider>
	)
}


export default App
