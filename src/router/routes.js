import AboutUs from "../components/pages/aboutUs/AboutUs";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ForgotPasswordContainer from "../components/pages/forgotPassword/ForgotPasswordContainer";
import Home from "../components/pages/home/Home";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import MyOrdersContainer from "../components/pages/myOrders/MyOrdersContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";
import ItemListContainer from "../components/pages/shop/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "forgotPassword",
    path: "/forgot-password",
    Element: ForgotPasswordContainer,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
  {
    id: "shop per category",
    path: "/shop/:category",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "orders",
    path: "/orders",
    Element: MyOrdersContainer,
  },
  {
    id: "about",
    path: "/aboutUs",
    Element: AboutUs,
  },
];
