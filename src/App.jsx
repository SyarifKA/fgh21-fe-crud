import InputData from "./pages/Input"
import DataUser from "./pages/DataUser"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditUser from "./pages/EditUser"

const router = createBrowserRouter([
  {
    path: "/",
    element: <InputData />
  },
  {
    path: "/data",
    element: <DataUser />
  },
  {
    path: "/edit/:id",
    element: <EditUser />
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
