import "./itemDetail.css";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import ManufactureDtails from "./manufactureDetails/ManufactureDtails";
import CounterButton from "../../common/counterButton/CounterButton";
import { useEffect } from "react";

const ItemDetail = ({ data }) => {
  const { product, suma, resta, counter, addToCart } = data;

  //be redirected to top of screen when click log in button in footer
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const manufactureDetailsData = {
    product,
    addToCart,
    counter,
  };

  const counterButtonData = {
    counter,
    suma,
    resta,
  };

  return (
    <Card
      raised={false}
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "0",
        boxShadow: "none",
        mx: { md: "6rem" },
        my: { md: "3rem" },
      }}
    >
      <Grid container>
        {/* prouct img*/}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={product.img}
            alt="prod.title"
            sx={{
              width: { xs: "100%", md: "80%" },
              aspectRatio: "1 / 1",
            }}
          />
        </Grid>

        {/*PRODUCT, PRICE, BUTTONS */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            pt: { xs: "2.5rem", md: "0rem" },
            px: { xs: "1rem", md: "0rem" },
          }}
        >
          {/* price, title, availability info */}
          <Box sx={{ mb: "3rem" }}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
                letterSpacing: "0.2rem",
                fontFamily: "Playfair",
              }}
              variant="body"
            >
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ pt: "1rem", fontSize: "1rem" }}>
              $ {Intl.NumberFormat().format(product.unit_price)}
            </Typography>
            {/* TAG WHEN STOCK=0 */}
            {product.stock === 0 && (
              <Box
                sx={{
                  width: "8rem",
                  backgroundColor: "green",
                  mt: "0.5rem",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    width: "auto",
                    color: "white",
                    backgroundColor: "red",
                    textAlign: "center",
                  }}
                >
                  por encargo
                </Typography>
              </Box>
            )}
          </Box>

          {/* COUNTER BUTTON */}
          <CounterButton data={counterButtonData} />

          {/* PRODUCTION DETAILS */}
          <ManufactureDtails data={manufactureDetailsData} />

          <Paper
            variant="outlined"
            sx={{
              mt: { xs: "3rem", md: "5rem" },
              py: { xs: "1rem", md: "1rem" },
              px: { xs: "1rem", md: "1rem" },
              height: "auto",
              borderRadius: "0px",
            }}
          >
            <Typography variant="h6" sx={{ mb: "0.5rem" }}>
              Descripción:
            </Typography>
            <Typography variant="body">
              {product.description}.
              <br />
            </Typography>
            <Typography variant="h6" sx={{ mb: "0.5rem", mt: "1rem" }}>
              Medidas:
            </Typography>
            <Typography variant="body">
              {product.dimensions}
              <br />
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "600", mt: "2rem" }}>
              Si quieres conocer más alternativas de este producto, visita
              nuestro showroom o contactanos
            </Typography>
          </Paper>
        </Grid>

        {/* aditional info product */}
      </Grid>
    </Card>
  );
};

export default ItemDetail;
