import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewEmployee from "./pages/Employee/NewEmployee";

function App() {

  const AppLayout = () => (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );

  const router = createBrowserRouter([{
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employees",
        element: <Home />
      },
      {
        path: "employee/new",
        element: <NewEmployee />
      }
    ]
  }]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
