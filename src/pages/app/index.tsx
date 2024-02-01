import { useEffect, useState } from "react"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { light } from "../../common/theme/styled"

import { routers } from "./configs/routes"
import { GlobalContext } from "./contexts"
import { getLocalStorage, setLocalStorage } from "./configs/storage"
import { IGlobal } from "./interfaces"

function App() {
    const [global, useGlobal] = useState<IGlobal>({
        title: "Home",
        breadcrumbs: [{ to: "/", title: "Home" }],
        theme: light,
        idCompany: 1,
    })

    function setGlobal(newGlobal: IGlobal) {
        setLocalStorage(newGlobal)

        useGlobal({ ...global, ...newGlobal })
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
