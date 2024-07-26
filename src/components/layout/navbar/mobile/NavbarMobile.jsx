import { Badge } from "@mui/material";
import NavbarDrawer from "../NavbarDrawer";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Footer from "../../footer/Footer";


const NavbarMobile = ({ data }) => {
  const {
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    Link,
    IconButton,
    handleDrawerToggle,
    MenuIcon,
    container,
    mobileOpen,
    drawerWidth,
    drawerData,
    Outlet,
    Drawer,
  } = data;

  const { cart } = useContext(CartContext);

  let cartBadgeNumber = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  //- MODIFIABLES
  let navbarHeight = "64px";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: "100%",
          backgroundColor: "background.main",
          borderBottom: "solid thin #E6DED7 ",
        }}
        component="nav"
      >
        {/* Toolbar === navbar content */}
        <Toolbar
          sx={{
            height: navbarHeight,
            gap: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* menu icon */}
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="small" color="secondary" />
          </IconButton>

          {/* logo */}
          <Link to="/">
            <img
              alt="RAMP"
              src="src/assets/RAMPsinFondo.png"
              width={"20px"}
            />
          </Link>

          {/* CART */}
          <Link to={"/cart"}>
            <Badge
              badgeContent={cartBadgeNumber}
              color="primary"
              overlap="circular"
            >
              <IconButton>
                {/* <ShoppingCartIcon fontSize="small" color="secondary" /> */}
                <ShoppingBagIcon fontSize="small" color="secondary" />
              </IconButton>
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>

      {/* NAVBAR DRAWER */}
      <Box component="nav" aria-label="mailbox folders">
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            anchor={"left"}
            transitionDuration={300}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                height: "100vh",
              },
            }}
          >
            <NavbarDrawer data={drawerData} />
          </Drawer>
        </nav>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: "0px", //! padding from navbar to content
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default NavbarMobile;
