import './magazines.css'
import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import PageHeader from '../../common/pageHeader/PageHeader';

const Magazines = ({data}) => {

  const {publications} = data

  const header = {header: "PUBLICACIONES"}
  return (
    <Box sx={{ mx: { xs: "1rem", md: "3rem" } }}>
      
      <PageHeader data={header}/>

      <Grid container spacing={5} rowSpacing={3} sx={{ mt: "0rem" }}>
        {publications.map((el) => {
          return (
            <Grid key={el.title} item xs={6} md={6} lg={4}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    boxShadow: "none",
                    width: "auto",
                  }}
                >
                  <Link to={`/publications/${el.id}`}>
                    <Box
                      id="magazine-imgContainer"
                      sx={{ height: { xs: "15rem", sm: "25rem", md: "30rem" }}}
                    >
                      <img src={el.portada} alt={el.title} style={{height:"100%"}} />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "500"}}
                        >
                        {el.title}
                      </Typography>
                    </CardContent>
                        </Link>
                </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Magazines