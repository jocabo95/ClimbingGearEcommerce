import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // params from home category img
  let { category } = useParams();
  let selectedCategoryFromHome = category;

  // get product collection from firebase & store in state
  useEffect(() => {
    const productsCollection = collection(db, "products");

    let displayProducts;

    if (selectedCategoryFromHome) {
      // if someone selected a category in "/" or in shop buttons
      displayProducts = query(
        productsCollection,
        where("category", "==", selectedCategoryFromHome)
      );
    } else {
      displayProducts = productsCollection;
    }

    getDocs(displayProducts)
      .then((res) => {
        let newarr = res.docs.map((product) => {
          return { ...product.data(), id: product.id }; // product.id has role ok key when mapping
        });

        setProducts(newarr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCategoryFromHome]);

  const data = {
    products,
    navigate,
  };
  return <ItemList data={data} />;
};

export default ItemListContainer;
