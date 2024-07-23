import { Box, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const CartDesktop = ({ data }) => {
  const { cart, deleteById } = data;


  return (
    <Grid
      item
      container
      sx={{ pr: { xs: "1rem", sm: "3rem"} }}
    >
      {/* //- HEADER CONTAINER */}
      <Grid
        item
        container
        sx={{ backgroundColor: "background.dark"}}
      >
        <Grid className="cartHeaderGrid" item xs={5}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Producto
            </Typography>
          </Box>
        </Grid>
        <Grid className="cartHeaderGrid" item xs={2}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Precio
            </Typography>
          </Box>
        </Grid>
        <Grid className="cartHeaderGrid" item xs={2}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Unidades
            </Typography>
          </Box>
        </Grid>
        <Grid className="cartHeaderGrid" item xs={2}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Subtotal
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* //- PRODUCTS */}
      {cart.map((el) => {
        return (
          <Grid
            item
            container
            key={el.id}
            xs={12}
            sx={{
              borderBottom: "solid #F7F7F7",
              px: "1rem",
            }}
          >
            <Grid className="cartCellGrid" item xs={12} md={3}>
              <Box className="cartCell">
                <Link to={`/itemDetail/${el.id}`}>
                  <img src={el.img} style={{ height: "90px" }} />
                </Link>
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell">
                <Typography>{el.title}</Typography>
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell">
                <Typography sx={{ width: "100%", textAlign: "center" }}>
                  ${Intl.NumberFormat().format(el.unit_price)}
                </Typography>
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell" sx={{ width: "100%" }}>
                <Typography sx={{ textAlign: "center" }}>
                  {el.quantity}
                </Typography>
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Typography sx={{ width: "100%", textAlign: "center" }}>
                ${Intl.NumberFormat().format(el.unit_price * el.quantity)}
              </Typography>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={1}>
              <Box className="cartCell">
                <IconButton
                  size="medium"
                  color="secondary"
                  onClick={() => deleteById(el.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CartDesktop;
