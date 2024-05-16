import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import { useAuth } from './context/UserAuthContext';

import Signin from './pages/Signin';
import { Layout, Dashboard, ProtectedRoutes } from './layout';
import { OrdersTable, Overview, ProductsTable } from "./components";
import NewProduct from './pages/NewProduct';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';

function App() {

  const { isLoggedIn } = useAuth();

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {path: '/signin', element: <Signin />},
      {
        path: '/',
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/', 
            element: <Dashboard />,
            children: [
              {path: '/', element: <Overview />},
              {path: '/overview', element: <Overview />},
              {path: '/addProduct', element: <NewProduct />},
              {path: '/updateProduct/:id', element: <UpdateProduct />},
              {path: '/allProducts', element: <ProductsTable />},
              {path: '/productDetails/:id', element: <ProductDetails />},
              {path: '/allOrders/', element: <OrdersTable />},
            ]
          }
        ]
      }
    ]
  }]);

  return <RouterProvider router = {router} />
}

export default App