import { RouterProvider } from "react-router-dom"
import { routers } from "./routes"


function App() {
	return (
		<RouterProvider
			router={routers}
			fallbackElement={<p>Initial Load...</p>}
		/>
	)
}

export default App
