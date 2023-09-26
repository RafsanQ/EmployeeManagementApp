import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListEmployeeComponent/>,
    },
    {
      path: "/employees",
      element: <ListEmployeeComponent/>
    }
  ]);

  return (
    <>
        <Header/>
        <div className="container">
          <RouterProvider router={router} />   
        </div>
        <Footer/>
    </>
  )
}

export default App
