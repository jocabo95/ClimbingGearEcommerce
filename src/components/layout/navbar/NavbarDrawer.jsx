import { Box, Toolbar, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const NavbarDrawer = ({ data }) => {
  const {
    menuItems,
    user,
    adminRole,
    isLogged,
    handleLogout,
    handleDrawerToggle,
  } = data;

  const navLinkHeight = "5rem";
  const navLinkFontSize = "1.5rem";

  return (
    <Box sx={{ backgroundColor: "background.main", height: "100vh" }}>
      <Toolbar />

      {/* logo */}
      <Link to={"/"} onClick={handleDrawerToggle}>
        <Typography
          variant="h4"
          sx={{ pl: "24px", mb: "1.5rem", fontWeight: "500" }}
        >
          BASALTO STUDIO
        </Typography>
      </Link>

      {/* nav list */}
      <List>
        {menuItems.map(({ id, path, title }) => {
          return (
            <Link key={id} to={path}>
              <ListItem
                divider={true}
                disablePadding
                sx={{ height: navLinkHeight }}
              >
                <ListItemButton onClick={handleDrawerToggle}>
                  <ListItemText
                    primary={title}
                    sx={{
                      color: "primary.contrastText",
                      ".MuiListItemText-primary": { fontSize: navLinkFontSize },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}

        {/* DASHBOARD */}
        {user.rol === adminRole && (
          <Link to={"/dashboard"}>
            <ListItem
              divider={true}
              disablePadding
              sx={{ height: navLinkHeight }}
            >
              <ListItemButton>
                <ListItemText
                  primary={"DASHBOARD"}
                  sx={{
                    color: "primary.contrastText",
                    ".MuiListItemText-primary": { fontSize: navLinkFontSize },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        {/* CERRAR SESION */}
        {isLogged && (
          <ListItem
            divider={true}
            disablePadding
            sx={{ height: navLinkHeight }}
          >
            <ListItemButton onClick={handleLogout}>
              <ListItemText
                primary={"CERRAR SESIÓN"}
                sx={{
                  color: "#bf3815",
                  ".MuiListItemText-primary": { fontSize: navLinkFontSize },
                }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default NavbarDrawer;
