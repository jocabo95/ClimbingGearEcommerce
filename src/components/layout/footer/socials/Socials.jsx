import "./socials.css"
import { Grid, IconButton, Typography } from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const Socials = () => {
    
  return (
    <Grid container sx={{ ml: "1rem" }}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{mb:"1rem"}}>Redes</Typography>
      </Grid>
      <Grid item xs={2} md={3}>
        <Link to="https://www.instagram.com/basaltostudio/">
          <IconButton edge="start">
            <InstagramIcon
              fontSize="large"
              color="secondary"
              sx={{ ml: "0rem" }}
            />
          </IconButton>
        </Link>
      </Grid>
      <Grid item xs={2} md={3}>
        <Link to="https://www.linkedin.com/in/basalto-studio-b57147259/?originalSubdomain=co">
          <IconButton edge="start">
            <LinkedInIcon fontSize="large" color="secondary" />
          </IconButton>
        </Link>
      </Grid>
      <Grid item xs={2} md={3}>
        <Link to="https://wa.me/573124572091">
          <IconButton edge="start">
            <WhatsAppIcon fontSize="large" color="secondary" />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Socials