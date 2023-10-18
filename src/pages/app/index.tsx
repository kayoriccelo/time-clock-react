import { useEffect, useState } from "react"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from 'styled-components'

import { routers } from "./routes"
import { light } from "../../common/theme/styled"
import { GlobalContext } from "./context"
import { getLocalStorage, setLocalStorage } from "./storage"
import { IGlobal } from "./interface"


function App() {
	const [ global, useGlobal ] = useState<IGlobal>({
		title: 'Home',
		breadcrumbs: [{ to: '/', title: 'Home'}],
		theme: light
	})
	
	function setGlobal (newGlobal: IGlobal) {
		setLocalStorage(newGlobal)

		useGlobal({ ...global, ...newGlobal})
	}

	useEffect(() => {
		const newGlobal = getLocalStorage(global)

		setGlobal(newGlobal)
	}, [])

	return (
		<GlobalContext.Provider value={{ global, setGlobal }}>
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
