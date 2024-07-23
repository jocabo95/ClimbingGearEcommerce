import "../../dashboards.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ShipmentForm = ({data}) => {
  const { cityToEdit, handleChange, handleSubmit, handleClose } = data;


  return (
    <Box className="dashboard-form-container">
      <Box sx={{ textAlign: "right", mb: "1rem" }}>
        <IconButton color="black" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <form className="dashboard-form">
        <Typography variant="h5">Costo de Envío</Typography>
        <TextField
          label="Ciudad"
          defaultValue={cityToEdit?.city}
          variant="outlined"
          name="city"
          onChange={handleChange}
        />
        <TextField
          label="Costo de envío (COP)"
          defaultValue={cityToEdit?.shipment}
          variant="outlined"
          name="shipment"
          onChange={handleChange}
        />
        <TextField
          label="Tiempo de entrega (días habiles)"
          defaultValue={cityToEdit?.deliveryDays}
          variant="outlined"
          name="deliveryDays"
          onChange={handleChange}
        />

        <Button type="submit" onClick={handleSubmit}>
          Finalizar
        </Button>
      </form>
    </Box>
  );
};

export default ShipmentForm;
