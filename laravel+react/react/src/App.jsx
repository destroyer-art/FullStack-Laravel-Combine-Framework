import {RouterProvider} from "react-router-dom";
import router from "./router/index";
import {ContextProvider} from './context/ContextProvider'
import './index.css'

function App() {
  return (
    <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
  )
}

export default App
