import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, OrderHistory, OrderPlace, ProductDetails, Shop, Signin, Signup, UserDetails } from './pages/';
import { Cart } from './components';
import Layout from './layout/Layout';
import PagesLayout from './layout/PagesLayout';
import ProtectedRoutes from './layout/ProtectedRoutes';
import AddAddress from './components/AddAddress';

const App = () => {

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {path: '/signin', element: <Signin />},
      {path: '/signup', element: <Signup />},
      {
        path: '/',
        element: <PagesLayout />,
        children: [
          {path: '/', element: <Home />},
          {path: '/shop', element: <Shop />},
          {path: '/shop/:gender', element: <Shop />},
          {path: '/shop/product/:id', element: <ProductDetails />},
          {
            path: '/',
            element: <ProtectedRoutes />,
            children: [
              {path: '/user-profile', element: <UserDetails />},
              {path: '/add-address', element: <AddAddress />},
              {path: '/cart', element: <Cart />},
              {path: '/place-order', element: <OrderPlace />},
              {path: '/order-history', element: <OrderHistory />},
            ]
          },
        ]
      }
    ]
  }]);

  return <RouterProvider router = { router } />
}

export default App