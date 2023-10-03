import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/employees",
      element: <Home/>
    }
  ]);

  return (
    <>
        <Navbar/>
        <div className="container">
          <RouterProvider router={router} />   
        </div>
        <Footer/>
    </>
  )
}

export default App
