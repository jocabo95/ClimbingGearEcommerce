import { useTheme } from "@emotion/react";
import "./footer.css";
import {
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Socials from "./socials/Socials";
import CompanyInfo from "./companyInfo/CompanyInfo";
import Horarios from "./horarios/Horarios";
import { Link } from "react-router-dom";

const Footer = () => {
  let theme = useTheme();

  let desktopQuery = useMediaQuery(theme.breakpoints.up("md"));
  let tabletQuery = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Paper
      id="footer-container"
      variant="outlined"
      sx={{ borderRadius: "0px", padding: "1rem" }}
    >
      <Grid container id="footerContentContainer">
        {desktopQuery ? (
          <>
            <Grid item xs={4}>
              <CompanyInfo />
            </Grid>
            <Grid item xs={4}>
              <Horarios />
            </Grid>
            <Grid item xs={4}>
              <Socials />
            </Grid>
          </>
        ) : tabletQuery ? (
          <>
            <Grid item xs={6}>
              <CompanyInfo />
            </Grid>
            <Grid item xs={6}>
              <Horarios />
              <Socials />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Horarios />
            </Grid>
            <Grid item xs={12} sx={{ mt: "2rem", mb: "2rem" }}>
              <Socials />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CompanyInfo />
            </Grid>
          </>
        )}
      </Grid>
      <Divider sx={{ mt: "1.5rem", mb: "1rem" }} />
      <div
        style={{
          minHeight: "300px",
          width: "100%",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        {/* google maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.432430540057!2d-74.0535814!3d4.6637566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5fd5440001%3A0xbe4b59d9fb4db9c1!2sBASALTO%20STUDIO!5e0!3m2!1ses-419!2sco!4v1713797171543!5m2!1ses-419!2sco"
          width="100%"
          height="300px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Divider sx={{ mt: "1.5rem", mb: "1rem" }} />
      <Typography variant="body2" sx={{ fontFamily: "Playfair" }}>
        © 2023 copyrights All rights reserved. BASALTO STUDIO, Susana Garavito
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
        <Link to={"/login"}>login</Link>
      </Typography>
    </Paper>
  );
};

export default Footer;
