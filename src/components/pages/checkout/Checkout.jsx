import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import OrderSummary from "./checkoutForm/OrderSummary";
import Form from "./checkoutForm/Form";

const Checkout = ({ data }) => {
  const { Wallet, preferenceId, orderId } = data;

  return (
    <div>
      {!orderId ? (
        <Grid container>
          {/* ORDER SUMMARY */}
          <Grid item xs={12} md={6}>
            <OrderSummary />
          </Grid>

          {/* FORM */}
          <Grid item container xs={12} md={6}>
            <Grid
              item
              xs={12}
              
              sx={{
                mx: { xs: "1rem", md: "2rem"},
                mt: { xs: "1rem", md: "3rem"},
              }}
            >
              <Form data={data} />
            </Grid>

            {/* Mercadopago Button */}
            {preferenceId && (
            <Grid
              item
              xs={12}
             
              sx={{
                mx: { xs: "1rem", md: "2rem"},
              }}
            >
                <Wallet
                  initialization={{ preferenceId, redirectMode: "self" }}
                />
            </Grid>
              )}
          </Grid>
        </Grid>
      ) : (
        <>
          <h4>El pago se realizo con exito</h4>
          <h4>Su numero de compra es {orderId}</h4>
          <Link to="/shop">Seguir comprando</Link>
          <Link to="/orders">mis ordenes</Link>
        </>
      )}
    </div>
  );
};

export default Checkout;
