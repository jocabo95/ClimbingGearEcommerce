import { Box, Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ShipmentContext } from "../../../context/ShipmentContext";


const OrderSummary = () => {

  const {cart, getTotalPrice} = useContext(CartContext);
  const { selectedCityShipmentInfo } = useContext(ShipmentContext);

  return (
    <Paper
      elevation={4}
      sx={{
        m: { xs: "2rem", md: "3rem" },
        p: "1rem",
        height: { xs: "auto", md: "100%" },
      }}
    >
      <p>Total</p>
      {selectedCityShipmentInfo ? (
        <Typography variant="h4" sx={{ mb: "1.5rem", fontWeight: "500" }}>
          ${" "}
          {Intl.NumberFormat().format(
            getTotalPrice() + selectedCityShipmentInfo.shipment
          )}
        </Typography>
      ) : (
        <Typography variant="h4" sx={{ mb: "1.5rem", fontWeight: "500" }}>
          $ ---------
        </Typography>
      )}

      {/* product info */}
      <Box>
        {cart.map((prod) => {
          return (
            <Grid container key={prod.id} sx={{ mb: "1rem" }}>
              <Grid item xs={8}>
                <Typography>{prod.title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  $ {Intl.NumberFormat().format(prod.unit_price)}
                </Typography>
              </Grid>
            </Grid>
          );
        })}

        {/* costo envio */}
        <Grid container sx={{ mb: "1rem" }}>
          <Grid item xs={8}>
            <Typography>Costo de envío</Typography>
          </Grid>
          <Grid item xs={4}>
            {selectedCityShipmentInfo ? (
              <Typography>
                ${" "}
                {Intl.NumberFormat().format(
                  selectedCityShipmentInfo.shipment
                )}
              </Typography>
            ) : (
              <Typography>
                ${" "}-----
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default OrderSummary