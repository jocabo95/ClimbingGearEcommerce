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
  let topNavbarHeight = "60px";
  let bottomNavbarHeight = "64px";

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
            <Grid container>
              {/* logo & Cart*/}
              <Grid
                item
                container
                xs={12}
                sx={{
                  height: topNavbarHeight,
                  borderBottom: "groove thin #D5D5D5",
                  padding: "0 24px 0 24px",
                }}
              >
                <Grid item xs={1}>
                  {/* used to center basalto (easier with 3 grid cells) */}
                </Grid>
                <Grid item xs={10}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        fontFamily: "Raleway",
                      }}
                    >
                      <Link to={"/"}>BASALTO STUDIO</Link>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
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

              {/* navbar buttons */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: {
                      height: bottomNavbarHeight,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: "4rem",
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
                              sx={{ fontSize: "0.7rem" }}
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
            py: "60px", //! padding betwwen hero img and content
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
