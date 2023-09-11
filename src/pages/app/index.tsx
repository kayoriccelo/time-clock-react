import { useCallback,  useEffect, useMemo, useState } from "react"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from 'styled-components'

import { routers } from "./routes"
import { light } from "../../common/theme/styled"
import { IGlobal } from "./interface"
import { GlobalContext } from "./context"
import { getLocalStorage, setLocalStorage } from "./storage"


function App() {
	const [global, useGlobal] = useState<IGlobal>({
		title: 'Home',
		breadcrumbs: [{ to: '/', title: 'Home'}],
		theme: light
	})

	const handlerGlobal = useCallback((newGlobal: IGlobal) => {
		setLocalStorage(newGlobal)

		useGlobal({ ...global, ...newGlobal })
	}, [])

	const value = useMemo(() => ({
		global,
		handlerGlobal
	}), [global])

	useEffect(() => {
		const newGlobal = getLocalStorage(global)
		
		setLocalStorage(newGlobal)

		useGlobal(newGlobal)
	}, [])

	return (
		<GlobalContext.Provider value={value}>
			<ThemeProvider theme={light}>
				<RouterProvider
					router={routers}
					fallbackElement={<p>Initial Load...</p>}
				/>
			</ThemeProvider>
		</GlobalContext.Provider>
	)
}


export default App
