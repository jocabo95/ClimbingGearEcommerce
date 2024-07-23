import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import useCounter from "../../../utils/hooks/useCounter";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {

  let { addToCart, getQuantity } = useContext(CartContext);

  let { id } = useParams();

  let quantity = getQuantity(id);

  const [product, setproduct] = useState({});

  let { suma, resta, counter } = useCounter(quantity, product.stock);

  // get product from firebase using id from url
  useEffect(() => {
    (async () => {
      let refDoc = doc(db, "products", id);
      try {
        let res = await getDoc(refDoc);
        setproduct({ ...res.data(), id: res.id });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const data = {
    product,
    suma,
    resta,
    counter,
    addToCart
  }

  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer