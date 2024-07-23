import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../../../../firebaseConfig";
import { deleteObject, ref } from "firebase/storage";
import ProductsDashboard from "./ProductsDashboard";


const ProductsDashboardContainer = ({data}) => {

  const {modalStyle} = data;
  const [dbChange, setDbChange] = useState(false); // registers when a change is made to products colection
  const [products, setProducts] = useState(); // stores all products from fb
  const [productTobeEdited, setproductTobeEdited] = useState(null);
  const [open, setOpen] = useState(false); // stores modal state

  // get products from fb to show them in dashboard
  useEffect(() => {
    setDbChange(false);

    let productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((res) => {
        const prodArr = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setProducts(prodArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dbChange]);

  // remove prod from dashboard
  let removeProd = async (product) => {
    deleteDoc(doc(db, "products", product.id));

    const imgRef = ref(storage, product.img);
    await deleteObject(imgRef);

    setDbChange(true);
  };

  // function to close modal
  let handleClose = () => {
    setOpen(false);
    setproductTobeEdited(null);
  };

  //open modal
  let handleOpen = (product) => {
    setproductTobeEdited(product);
    setOpen(true);
  };

  const prodDashData = {
    products,
    removeProd,
    modalStyle,
    handleClose,
    handleOpen,
    open,
    setOpen,
    setDbChange,
    productTobeEdited,
    setproductTobeEdited,
  };


  return <ProductsDashboard data={prodDashData} />;
}

export default ProductsDashboardContainer