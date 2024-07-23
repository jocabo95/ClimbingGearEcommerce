import { useEffect } from 'react';
import './aboutUs.css'
import { Grid, Typography } from "@mui/material"

const AboutUs = () => {
  //be redirected to top of screen when click log in button in footer
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div style={{ width: "100%", marginTop:"1rem" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          id="aboutus-gridImg"
          sx={{ mx: { xs: "none", md: "2rem" } }}
        >
          <img
            id="aboutUs-img"
            src={"src/images/susy.PNG"}
            alt="Susana Garavito, fundadora de Basalto Studio"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          id="aboutUs-text"
          sx={{ mt: { md: "5vh" }, mx: { sm: "3rem" } }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: "400", fontSize: { md: "1.2rem" }, mb: "3rem" }}
          >
            Basalto Studio es una oficina de arquitectura, diseño e interiorismo
            fundada por la arquitecta Colombiana Susana Garavito. Es arquitecta
            de la Pontificia Universidad Javeriana con estudios de diseño en el
            Politécnico de Milán y de arte en la ciudad de Florencia, Italia.{" "}
            <br />
            <br />
            Basalto Studio que, en palabras de su creadora, busca llegar a
            procesos constructivos -como la arquitectura, el diseño y la
            producción de mobiliario, iluminación y accesorios- inspirados en
            los elementos puros de la naturaleza, como el mismo basalto. <br />
            <br />
            Desde su apertura en el año 2019, este estudio ha diseñado espacios
            residenciales, comerciales, oficinas y piezas icónicas de mobiliario
            como los butacos tallados en madera de formas puramente geométricas,
            y los tótems modulares de gran formato de la colección Endless
            Balance y Solé
          </Typography>
          <Typography variant="body" sx={{ fontWeight: "600" }}>
            GANADORA ICONOS DE DISEÑO 2022
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs