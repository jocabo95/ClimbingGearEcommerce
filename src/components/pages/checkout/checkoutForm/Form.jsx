import { Box, Button, TextField, Typography } from "@mui/material";

const Form = ({data}) => {


  const {handleChange, handleBuy}=data;

  const clientData = [
    { name: "nombre"},
    { name: "apeliido"},
    { name: "teléfono"},
    { name: "correo"},
    { name: "verificar correo"},
  ];


  return (
   
    <form>
      {clientData.map((el) => {
        return (
          <Box key={el.name}>
            <Typography sx={{ fontWeight: "600" }}>{el.name}</Typography>
            <TextField
              name={el.name}
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleChange}
              sx={{ mb: "1rem", mr: "1rem" }}
            />
          </Box>
        );
      })}

      <Button
        onClick={handleBuy}
        variant="contained"
        color="details"
        sx={{
          mt: "3rem",
          opacity: "0.9",
          color: "white",
          width: "100%",
        }}
      >
        Pagar
      </Button>
    </form>
  );
}

export default Form