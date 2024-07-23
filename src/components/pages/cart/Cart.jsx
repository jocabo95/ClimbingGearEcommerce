import "./cart.css";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CartDesktop from "./desktop/CartDesktop";
import CartMobile from "./mobile/CartMobile";
import CartButtonsDesktop from "./desktop/CartButtonsDesktop";
import PageHeader from "../../common/pageHeader/PageHeader";

const Cart = ({ data }) => {
  const { cart, deleteById, total, selectedCityShipmentInfo } = data;

  const cartData = { cart, deleteById };
  const cartButtonsData = {total};

  const theme = useTheme();
  const desktopQuery = useMediaQuery(theme.breakpoints.up("md"));
  const header = {header: "CARRITO"}

  return (
    <div>
      {/* //- header */}
      <PageHeader data={header}/>

      {/* //- DESKTOP IMG, PRODUCT, PRICE, DELTE ITEM */}
      <Grid container sx={{ px: { xs: "1rem", sm: "3rem" } }}>
        {desktopQuery ? (
          <>
            <Grid item xs={9}>
              <CartDesktop data={cartData} />
            </Grid>

            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <CartButtonsDesktop data={cartButtonsData} />
            </Grid>
          </>
        ) : (
          //- MOBILE IMG, PRODUCT, PRICE, DELTE ITEM */}
          <>
            <CartMobile data={cartData} />

            {/* Price summary */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "background.dark",
                p: "1rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  borderBottom: "solid thin gray",
                  mb: "0.5rem",
                  pb: "0.5rem",
                }}
              >
                {selectedCityShipmentInfo ? (
                  <strong>
                    TOTAL: ${" "}
                    {Intl.NumberFormat().format(
                      total + selectedCityShipmentInfo.shipment
                    )}{" "}
                  </strong>
                ) : (
                  <strong>TOTAL: $ ------</strong>
                )}
              </Typography>

              <Typography>
                <strong>
                  Subtotal: $ {Intl.NumberFormat().format(total)}{" "}
                </strong>
              </Typography>

              <Typography>
                {selectedCityShipmentInfo ? (
                  <strong>
                    Envío: ${" "}
                    {Intl.NumberFormat().format(
                      selectedCityShipmentInfo.shipment
                    )}{" "}
                  </strong>
                ) : (
                  <strong>Envío: $ ------</strong>
                )}
              </Typography>
            </Box>

            {/* Continue with payment button */}
            <Link to="/checkout" style={{ width: "100%" }}>
              <Button
                variant="contained"
                color="details"
                sx={{
                  mt: "1rem",
                  opacity: "0.9",
                  color: "white",
                  width: "100%",
                }}
              >
                Continuar
              </Button>
            </Link>
          </>
        )}
      </Grid>

      {/* //- BUTTONS, TOTAL */}
    </div>
  );
};

export default Cart;
