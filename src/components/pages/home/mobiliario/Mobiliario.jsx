import "./mobiliario.css";
import { Box, Grid, Typography } from "@mui/material";
import { Image } from "@nextui-org/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../../firebaseConfig";

const Mobiliario = () => {

  const[categories, setCategories] = useState([]) //stores product categories from firebase
  

  useEffect(()=>{

    let categoriesCollection = collection(db, "categories")

    getDocs(categoriesCollection)
      .then((res)=>{
        let categoriesArr = res.docs.map((product)=>{
          return {...product.data()}
        })

        setCategories(categoriesArr)
      })

  },[])


  let widthXs = 6;
  let widthMd = 2.8;

  return (
    <Box sx={{ margin: "1rem" }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ my: "4rem", textAlign: "center", letterSpacing: "0.15rem" }}
      >
        MOBILIARIO
      </Typography>
      <Grid className="grid-container" container spacing={1} rowGap={1}>
        {categories.map((el) => {
          return (
            <Grid key={el.category} className="home-gridItem" item xs={widthXs} md={widthMd}>
              <Link to={`/shop/${el.category}`}>
                <div className="img-blackBackground">
                  <div className="img-container">
                    <Image
                      className="home-categoryImg"
                      radius="none"
                      isZoomed
                      width={"auto"}
                      alt="LÁMPARAS"
                      src={el.img}
                    />
                  </div>
                </div>

                <Typography variant="body" className="home-categoryImgText">
                  {el.category.toUpperCase()}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Mobiliario;
