import { Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationFilters = ({data}) => {

  const {categories, redirectToUrl} = data;

  
  return (
    <Paper
      variant="text"
      square
      sx={{
        width: "auto",
        mb: "1rem",
      }}
    >
      <Grid container sx={{ width: "100%" }}>
        {categories.map((el) => {
          return (
            <Grid key={el.category} item xs={6} sm={3}>
              <Link to={`${redirectToUrl}/${el.category}`}>
                <Button
                  variant="outlined"
                  sx={{ width: "100%", borderRadius: "0" }}
                >
                  <Typography
                    className="category"
                    variant="body2"
                    sx={{ fontWeight: "600" }}
                  >
                    {el.category}
                  </Typography>
                </Button>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

export default NavigationFilters