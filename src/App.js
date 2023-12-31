import CartPage from "./page/CartPage";
import Checkout from "./page/Checkout";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import ProductDetailPage from "./page/ProductDetailPage";
import SignupPage from "./page/SignupPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
