import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { menuItems } from "../../../router/navigation";
import { logout } from "../../../firebaseConfig";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/base";
import NavbarMobile from "./mobile/NavbarMobile";
import { useMediaQuery, useTheme } from "@mui/material";
import NavbarDesktop from "./desktop/NavbarDesktop";

const drawerWidth = "100%"; //! set drawer width

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const { clearCart } = useContext(CartContext);
  const { handleLogoutAuth, isLogged, user } = useContext(AuthContext);

  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("md")); // true if display bellow  md

  const adminRole = import.meta.env.VITE_ADMINROLE;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    handleLogoutAuth();
    clearCart();
    navigate("/login");
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerData = {
    menuItems,
    user,
    adminRole,
    isLogged,
    handleLogout,
    handleDrawerToggle,
  };

  const navbarData = {
    Box,
    Button,
    CssBaseline,
    AppBar,
    Toolbar,
    Link,
    menuItems,
    IconButton,
    ShoppingCartIcon,
    handleDrawerToggle,
    MenuIcon,
    container,
    mobileOpen,
    drawerWidth,
    drawerData,
    Outlet,
    Drawer,
  };

  return (
    <>
      {mediaQuery ? (
        <NavbarMobile data={navbarData} />
      ) : (
        <NavbarDesktop data={navbarData} />
      )}
    </>
  );
}

export default Navbar;
