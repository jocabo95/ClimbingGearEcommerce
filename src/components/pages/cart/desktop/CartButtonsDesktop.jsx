import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShipmentContext } from "../../../context/ShipmentContext";

const CartButtonsDesktop = ({ data }) => {

  const { total } = data;

  const {allCitiesShipmentInfo, selectedCityShipmentInfo, onChange} = useContext(ShipmentContext)

  return (
    <Box sx={{ width: "100%" }}>
      {/*//- SHIPING */}
      <Box
        sx={{
          width: "100%",
          p: "1rem",
          mb: "2rem",
          backgroundColor: "background.dark",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            mb: "0.5rem",
            pb: "0.5rem",
            borderBottom: "solid thin black",
          }}
        >
          {selectedCityShipmentInfo ? (
            <strong>
              Costo de envío: $
              {Intl.NumberFormat().format(selectedCityShipmentInfo.shipment)}
            </strong>
          ) : (
            <strong>Costo de envío: $ ------</strong>
          )}
        </Typography>

        {/* slect city */}
        <TextField
          id="outlined-select-currency"
          select
          size="small"
          label="Ciudad"
          defaultValue="Bogotá"
          sx={{ width: "100%", my: "1rem" }}
          onChange={onChange}
        >
          {allCitiesShipmentInfo &&
            allCitiesShipmentInfo.map((el) => (
              <MenuItem key={el.id} value={el.city}>
                {el.city}
              </MenuItem>
            ))}
        </TextField>
      </Box>

      {/*//- TOTAL PRICE */}
      <Box
        sx={{
          width: "100%",
          p: "1rem",
          mb: "2rem",
          backgroundColor: "background.dark",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            mb: "0.5rem",
            pb: "0.5rem",
            borderBottom: "solid thin black",
          }}
        >
          {selectedCityShipmentInfo ? (
            <strong>
              TOTAL: $
              {Intl.NumberFormat().format(
                total + selectedCityShipmentInfo.shipment
              )}{" "}
            </strong>
          ) : (
            <strong>TOTAL: $ --------- </strong>
          )}
        </Typography>

        <Typography sx={{ width: "100%" }}>
          Subtotal: ${Intl.NumberFormat().format(total)}
        </Typography>
        <Typography sx={{ width: "100%" }}>
          {selectedCityShipmentInfo ? (
            <p>
              Envío: $
              {Intl.NumberFormat().format(selectedCityShipmentInfo.shipment)}
            </p>
          ) : (
            <p>Envío: $</p>
          )}
        </Typography>

        <Link to="/checkout">
          <Button
            variant="contained"
            color="details"
            sx={{
              width: "100%",
              mt: "1rem",
              opacity: "0.9",
              color: "white",
            }}
          >
            Continuar
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CartButtonsDesktop;
