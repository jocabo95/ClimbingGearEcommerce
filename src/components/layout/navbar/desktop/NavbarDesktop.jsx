import { Badge, Grid, Typography } from "@mui/material";
import NavbarDrawer from "../NavbarDrawer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Footer from "../../footer/Footer";

const NavbarDesktop = ({ data }) => {
  const {
    Box,
    Button,
    CssBaseline,
    AppBar,
    Toolbar,
    menuItems,
    IconButton,
    ShoppingCartIcon,
    handleDrawerToggle,
    container,
    mobileOpen,
    drawerWidth,
    drawerData,
    Outlet,
    Drawer,
  } = data;

  const { cart } = useContext(CartContext);

  let cartBadgeNumber = cart.reduce((total, product)=>{
    return total + product.quantity
  }, 0)

  //- MODIFIABLES
  let bottomNavbarHeight = "80px";

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          height: "100vh",
        }}
      >
        <CssBaseline />

        {/* AppBar === navbar content */}
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
          <Toolbar
            disableGutters
            sx={{
              gap: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >

            {/* NAVBAR CONTENT */}
            <Grid container>

              {/* LOGO */}
              <Grid item container xs={3}>

                <Box sx={{height: bottomNavbarHeight, width:"100%", display:"flex"}}>

                  <Grid item  xs={3} sx={{display:"flex", justifyContent:"flex-end", alignItems:"center", pr:"0.4rem"}}>
                    {/* logo */}
                    
                      <img
                        alt="RAMP"
                        src="src/assets/RampGruesoSinFondo.png"
                        width={"30px"}
                      />
                    
                  </Grid>

                  <Grid item xs={9} sx={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>

                    <Box>
                      <Grid item xs={12} sx={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                        {/* ramp */}
                        <p className="logoText">R.A.M.P</p>
                      </Grid>

                      <Grid item xs={12} sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
                        {/* climbing */}
                        <p className="logoText">climbing</p>
                      </Grid>
                    </Box>
                    

                  </Grid>

                </Box>

              </Grid>

              {/* navbar buttons */}
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: {
                      height: bottomNavbarHeight,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: "2rem",
                    },
                  }}
                >
                  {menuItems.map((el) => {
                    return (
                      <Box
                        key={el.id}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Link to={el.path}>
                          <Button variant="text">
                            <Typography
                              variant="body"
                              sx={{ fontSize: "0.7rem", fontFamily: "Lato", fontWeight:"700" }}
                            >
                              {el.title}
                            </Typography>
                          </Button>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>

              {/* CART */}
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mr:"2.5rem"
                  }}
                >
                  <Link to={"/cart"}>
                    <Badge
                      badgeContent={cartBadgeNumber}
                      color="warning"
                      overlap="circular"
                    >
                      <IconButton>
                        <ShoppingCartIcon color="secondary" />
                      </IconButton>
                    </Badge>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        {/* NAVBAR DRAWER */}
        <Box component="nav" aria-label="mailbox folders">
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              anchor={"right"}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              <NavbarDrawer data={drawerData} />
            </Drawer>
          </nav>
        </Box>

        {/* renders the rest of content: home, shop, etc */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Toolbar />

          <Outlet />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default NavbarDesktop;
