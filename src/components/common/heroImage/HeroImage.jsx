import "./heroImage.css";
import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";


const HeroImage = ({imgUrl, text, button}) => {

  let theme = useTheme()

  let desktop = useMediaQuery(theme.breakpoints.up('md'))
  let tablet = useMediaQuery(theme.breakpoints.up('sm'))

 
  return (
    <>
      <div id="hero-container">
        {desktop ? (
          <img className="hero-img" alt="Basalto estudio" src={imgUrl} />
        ) : (
          tablet ? (
            <img
              className="hero-img"
              alt="Basalto estudio"
              src={"src/assets/sinopsisIpad.JPG"}
            />
          ) : (
            <img
              className="hero-img"
              alt="Basalto estudio"
              src={"src/assets/bellaVistaGuaca.jpg"}
            />
          )
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
          <div id="heroButtonContainer">
            <Button
            id="hero-button"
            variant="contained"
            size="large"
            disableFocusRipple={true}
            >
              <Link to={"/shop"}>
                <Typography className="buttonText" sx={{ fontFamily: "Lato", fontWeight: {xs:"400", sm:"500", md:"600"}, fontSize:{xs:"1rem", sm:"1.4rem"}, color:"black" }}>
                  COMPRAR
                </Typography>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroImage;
