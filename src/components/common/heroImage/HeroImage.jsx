import "./heroImage.css";
import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";


const HeroImage = ({imgUrl, text, button}) => {

  let theme = useTheme()

  let desktop = useMediaQuery(theme.breakpoints.up('md'))
  let tablet = useMediaQuery(theme.breakpoints.up('xs'))

 
  return (
    <>
      <div id="hero-container">
        {desktop ? (
          <img className="hero-img" alt="Basalto estudio" src={imgUrl} />
        ) : tablet ? (
          <img
            className="hero-img"
            alt="Basalto estudio"
            src={"src/assets/vueloBellaVista.jpg"}
          />
        ) : (
          <img
            className="hero-img"
            alt="Basalto estudio"
            src={"src/assets/Mache.jpg"}
          />
        )}

        {text && (
          <div className="hero-text-container">
            <Typography id="hero-title" sx={{ color: "white" }}>
              REACH. 
            </Typography>
            <Typography id="hero-title" sx={{ color: "white" }}>
              ASPIRE.
            </Typography>
            <Typography id="hero-title" sx={{ color: "white" }}>
              MASTER. 
            </Typography>
            <Typography id="hero-title" sx={{ color: "white" }}>
              PERFORM. 
            </Typography>
          </div>
        )}

        {/* //! BUTTON IF WANTED */}
        {button && (
          <Button
            id="hero-button"
            variant="contained"
            size="large"
            disableFocusRipple={true}
          >
            <Link to={"/aboutUs"}>
              <Typography sx={{ fontFamily: "Lato", fontWeight: "600", fontSize:"1.2rem", color:"black" }}>
                COMPRAR
              </Typography>
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default HeroImage;
