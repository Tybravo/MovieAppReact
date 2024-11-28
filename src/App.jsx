import Counter from "./components/Counter"
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./route/router"
//import Style from "./App.css";


const router = createBrowserRouter([...ROUTES]);


function App() {

  return(
    <>
    {/* <div className={Style.mainBackground}> */}
    <RouterProvider router={router}/>
    {/* </div> */}
    </>
  )

}

export default App
