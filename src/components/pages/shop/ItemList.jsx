import { Link } from "react-router-dom";
import ShopHeader from "./shopHeader/ShopHeader";
import {
  CardActionArea,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { NumericFormat } from "react-number-format";

const ItemList = ({ data }) => {
  const { products } = data;

  return (
    <div style={{ width: "100%" }}>
      {/* SHOP HEADER */}
      <ShopHeader data={data} />

      {/* clear filters */}
      <Link to={"/shop"}>
        <Button
          variant="text"
          sx={{
            width: "auto",
            height: "auto",
            borderRadius: "0",
            ml: { xs: "1rem", md: "3rem" },
            mb: "1rem",
          }}
        >
          <Typography
            variant="body"
            sx={{ fontSize: "0.8rem", textTransform: "capitalize" }}
          >
            limpiar filtros
          </Typography>
        </Button>
      </Link>

      {/* PRODUCTS */}
      <Box
        sx={{
          width: "auto",
          height: "100%",
          ml: { md: "2rem" },
          mr: { md: "2rem" },
        }}
      >
        <Grid container rowSpacing={1.2} sx={{ width: "100%", padding: "0px" }}>
          {products.map((prod) => {
            return (
              /* CARD */
              <Grid item key={prod.id} xs={6} md={4} sx={{ px: "1rem" }}>
                <Card
                  raised={false}
                  sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    bgcolor: "background",
                    pading: "0px",
                  }}
                >
                  <CardActionArea>
                    <Link to={`/itemDetail/${prod.id}`}>
                      {/* prod img */}
                      <CardMedia
                        component="img"
                        image={prod.img}
                        alt="prod.title"
                        sx={{
                          width: "100%",
                          aspectRatio: "1/1",
                        }}
                      />

                      {/* card text */}
                      <CardContent
                        sx={{
                          p: "1rem 0rem 0rem 0rem",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "1rem",
                            mb: "0.2rem",
                            fontWeight: "600",
                            fontFamily: "Playfair",
                          }}
                        >
                          {prod.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                          <NumericFormat
                            value={prod.unit_price}
                            thousandSeparator=","
                            prefix="$ "
                          />
                        </Typography>
                        {prod.stock === 0 && (
                          <Box
                            sx={{
                              width: "6rem",
                              backgroundColor: "none",
                              mt: "0.5rem",
                              borderRadius: "20px",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                width: "auto",
                                fontSize: "0.7rem",
                                color: "white",
                                backgroundColor: "#CA310D",
                                textAlign: "center",
                                borderRadius: "20px",
                              }}
                            >
                              por encargo
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
