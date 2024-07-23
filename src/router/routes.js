import AboutUs from "../components/pages/aboutUs/AboutUs";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ForgotPasswordContainer from "../components/pages/forgotPassword/ForgotPasswordContainer";
import Home from "../components/pages/home/Home";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import MagazinesContainer from "../components/pages/magazines/MagazinesContainer";
import MagazinesDetailContainer from "../components/pages/magazinesDetail/MagazinesDetailContainer";
import MyOrdersContainer from "../components/pages/myOrders/MyOrdersContainer";
import ProjectDetailContainer from "../components/pages/projectDetail/ProjectDetailContainer";
import ProjectsContainer from "../components/pages/projects/ProjectsContainer";
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
    id: "projects",
    path: "/projects",
    Element: ProjectsContainer,
  },
  {
    id: "project",
    path: "/projects/:projectId",
    Element: ProjectDetailContainer,
  },
  {
    id: "about",
    path: "/aboutUs",
    Element: AboutUs,
  },
  {
    id: "publications",
    path: "/publications",
    Element: MagazinesContainer,
  },
  {
    id: "publications",
    path: "/publications/:magId",
    Element: MagazinesDetailContainer,
  },
];
