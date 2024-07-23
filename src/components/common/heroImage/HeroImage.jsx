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
            src={"src/images/heroTablet.PNG"}
          />
        ) : (
          <img
            className="hero-img"
            alt="Basalto estudio"
            src={"src/images/heroMobile1.PNG"}
          />
        )}

        {text && (
          <div className="hero-text-container">
            <Typography id="hero-title" sx={{ color: "white" }}>
              {text}
            </Typography>
          </div>
        )}

        {button && (
          <Button
            id="hero-button"
            variant="contained"
            size="large"
            disableFocusRipple={true}
          >
            <Link to={"/aboutUs"}>
              <Typography sx={{ fontFamily: "Playfair" }}>
                Sobre nosotros
              </Typography>
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default HeroImage;
