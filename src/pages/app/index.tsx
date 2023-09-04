import { RouterProvider } from "react-router-dom"
import { routers } from "./routes"
import { useState } from "react"
import ThemeContext from "./contexts"
import { theme as themeProject } from "../../common/theme/styled"


function App() {
	const [ theme ] = useState(themeProject.light)

	return (
		<ThemeContext.Provider value={{ theme }}>
			<RouterProvider
				router={routers}
				fallbackElement={<p>Initial Load...</p>}
			/>
		</ThemeContext.Provider>
	)
}


export default App
