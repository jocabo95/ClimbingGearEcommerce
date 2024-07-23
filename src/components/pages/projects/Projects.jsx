import { Link } from "react-router-dom";
import "./projects.css"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import PageHeader from "../../common/pageHeader/PageHeader";

const Projects = ({ data }) => {
  const { projects } = data;

  const header = {header: "ESPACIOS BASALTO"}
  return (
    <Box sx={{ mx:{xs:"1rem", md:"3rem"} }}>
      <PageHeader data={header}/>

      <Grid container spacing={5} rowSpacing={3} sx={{ mt: "0rem" }}>
        {projects.map((el) => {
          return (
            <Grid key={el.title} item xs={12} md={6} lg={4}>
              <Link to={`/projects/${el.id}`}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    boxShadow: "none",
                    width: "auto",
                  }}
                >
                  <CardActionArea>
                    <Box
                      id="project-imgContainer"
                      sx={{ height: { xs: "15rem", sm: "25rem", md: "30rem" } }}
                    >
                      <img src={el.mainImg} alt={el.title} />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "500" }}
                      >
                        {el.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
