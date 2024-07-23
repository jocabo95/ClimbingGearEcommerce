import ProductForm from "./ProductForm"
import { useState } from "react";
import { db, storage, uploadImg } from "../../../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";


const ProductFormContainer = ({
  handleClose,
  setDbChange,
  setproductTobeEdited,
  productTobeEdited,
}) => {

  const [imgFile, setImgFile] = useState(null);
  const [progressUpload, setProgressUpload] = useState(false); // records upload duration to show progress bar
  const [uploadDone, setUploadDone] = useState(false); // tells when upload is done
  const [prodInfo, setProdInfo] = useState({
    title: "",
    description: "",
    category: "",
    stock: 0,
    unit_price: 0,
    img: "",
  });

  let handleChange = (e) => {
    if (productTobeEdited) {
      setproductTobeEdited({
        ...productTobeEdited,
        [e.target.name]: e.target.value,
      });
    } else {
      setProdInfo({
        ...prodInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  // handle when admin uploads img upload & delete previos img if needed
  let handleImgFile = async () => {
    setProgressUpload(true);
    setUploadDone(false);

    try {
      if (productTobeEdited) {
        //delete current img fron fb
        const imgRef = ref(storage, productTobeEdited.img);
        await deleteObject(imgRef);

        // upload new img to fb & update productTobeEdited
        let imgUrl = await uploadImg(imgFile);

        setproductTobeEdited({ ...productTobeEdited, img: imgUrl });
      } else {
        // upload img to fb and set new product info
        let imgUrl = await uploadImg(imgFile);
        setProdInfo({ ...prodInfo, img: imgUrl });
      }

      setProgressUpload(false);
      setUploadDone(true);
    } catch (error) {
      console.log(error);
    }
  };

  // send product info from dashboard to firebase
  let handleSubmit = (e) => {
    e.preventDefault();

    setUploadDone(false);

    let productsCollection = collection(db, "products");

    if (productTobeEdited) {
      let editedProduct = {
        ...productTobeEdited,
        stock: +productTobeEdited.stock,
        unit_price: +productTobeEdited.unit_price,
      };

      updateDoc(
        doc(productsCollection, productTobeEdited.id),
        editedProduct
      ).then(() => {
        handleClose();
        setDbChange(true);
      });
    } else {
      let newProduct = {
        ...prodInfo,
        stock: +prodInfo.stock,
        unit_price: +prodInfo.unit_price,
      };

      addDoc(productsCollection, newProduct)
        .then(() => {
          // CERRAR MODAL Y VOLVER A CARGAR DASHBOARD
          handleClose();
          setDbChange(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const data = {
    handleSubmit,
    handleChange,
    imgFile,
    setImgFile,
    progressUpload,
    uploadDone,
    handleImgFile,
    productTobeEdited,
    handleClose
  };

  return <ProductForm data={data} />;
};

export default ProductFormContainer