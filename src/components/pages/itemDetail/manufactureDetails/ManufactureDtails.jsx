import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ManufactureDtails = ({ data }) => {
  const { product, addToCart, counter } = data;

  const [acceptConditions, setAcceptConditions] = useState(null);

  useEffect(() => {
    if (product.stock === 0) {
      setAcceptConditions(false);
    }
  }, [product]);

  let handleConditions = () => {
    if (acceptConditions) {
      setAcceptConditions(false);
    } else {
      setAcceptConditions(true);
    }
  };

  return (
    <>
      {product.stock === 0 && 
        (
          <Typography variant="body2" sx={{ mt: "2rem", fontWeight: "600" }}>
            Entiendo que el tiempo de producción de este producto es de{" "}
            {product.productionTime} días hábiles luego de realizada su compra
          </Typography>
        )
      }

      {/* aceept conditions == false only when stock=0 and conditions havent been accepted */}
      {acceptConditions !== false ? (
        <Button
          color="secondary"
          variant="outlined"
          sx={{ width: "100%", mt: "1rem", mx: "auto", borderRadius:"0px" }}
          onClick={() => addToCart(product, counter)}
        >
          Agregar al carrito
        </Button>
      ) : (
        <>
          <Button
            color="details"
            variant="outlined"
            sx={{ width: "100%", mt: "1rem", mx: "auto", borderRadius:"0px" }}
            onClick={handleConditions}
          >
            Acepto terminos de entrega
          </Button>
          <Button
            disabled
            variant="contained"
            sx={{ width: "100%", mt: "1rem", mx: "auto", borderRadius:"0px" }}
          >
            Agregar al carrito
          </Button>
        </>
      )}
    </>
  );
};

export default ManufactureDtails;
