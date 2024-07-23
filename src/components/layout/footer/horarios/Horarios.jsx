import { Box, Typography } from "@mui/material";

const Horarios = () => {
  return (
    <Box className="footerTextContainer" sx={{ ml: "1rem" , height: "50%"}}>
      <Typography variant="h5" sx={{mb:"1rem"}}>Horarios</Typography>
      <Typography variant="body2" sx={{mb:"0.5rem"}}>
        Lunes a Viernes 10:30 am - 6:30 pm
      </Typography>
      <Typography variant="body2" sx={{mb:"0.5rem"}}>
        Sábados 10:30 am - 3:30 pm
      </Typography>
    </Box>
  );
};

export default Horarios;
