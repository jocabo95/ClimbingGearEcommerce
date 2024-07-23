import { Box, Grid, Typography } from "@mui/material";

const MagazinesDetail = ({data}) => {

  const {magOnDisplay}=data;


  console.log("mag fotos", magOnDisplay.title);

  return (
    <div style={{ margin: "3rem 3rem 0px 3rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "3rem",
          height: "auto",
        }}
      >
        <img
          style={{ height: "auto", width: "100%", maxWidth: "300px" }}
          src={magOnDisplay.portada}
          alt={magOnDisplay.title}
        />
      </Box>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: "500", textAlign:"center" }}
      >
        {magOnDisplay.title}
      </Typography>

      <Grid
        container
        gap={2}
        sx={{ display: "flex", justifyContent: "center", my: "2rem" }}
      >
        {magOnDisplay.fotos &&
          magOnDisplay.fotos.map((el) => {
            return (
              <Grid item key={el} xs={5} md={4}>
                <img src={el} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default MagazinesDetail