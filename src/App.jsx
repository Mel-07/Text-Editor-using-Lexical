import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./page/Layout"
import { MainProvider } from "./context/MainContext"


const route =createBrowserRouter([
  {
element:<Layout/>,
path:'/'

}])

function App() {


  return (
    <>
     <MainProvider>
     <RouterProvider router={route} />
     </MainProvider>
    </>
  )
}

export default App
