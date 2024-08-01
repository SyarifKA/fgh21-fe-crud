import InputData from "./pages/Input"
import DataUser from "./pages/DataUser"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <InputData />
  },
  {
    path: "/data",
    element: <DataUser />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
