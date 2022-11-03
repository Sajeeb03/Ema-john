import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Shop />,


        },
        {
          path: 'orders',
          element: <Orders></Orders>,
          loader: productsAndCartLoader,
        },
        {
          path: 'inventory',
          element: <PrivateRoute><Inventory /></PrivateRoute>
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping /></PrivateRoute>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
