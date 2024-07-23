import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import Checkout from "./Checkout";

import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ShipmentContext } from "../../context/ShipmentContext";

const CheckoutContainer = () => {
  const [preferenceId, setPreferenceId] = useState(null); // variable to store id given by mercadopago
  const [orderId, setOrderId] = useState(null);
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: ""
  });

  const {selectedCityShipmentInfo}=useContext(ShipmentContext)
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  let totalPrice = getTotalPrice();

  const currentDate = new Date()

  // manipulates URL query string to get "status" key value. Determines if transaction was succesful
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let paramValue = queryParams.get("status");

  // initialize mercadopago SDK
  initMercadoPago(import.meta.env.VITE_publicKeyTest, {
    locale: "es-CO",
  });

  // creates preference in mercadopago: makes summary of cart and makes post to backend
  //* const createPreference = async () => {
  //*   let summarizedArr = cart.map((el) => {
  //*     return {
  //*       title: el.title,
  //*       unit_price: el.unit_price,
  //*       quantity: el.quantity,
  //*     };
  //*   });

  //*   try {
  //*     let post = await axios.post("http://localhost:8000/create_preference", {
  //*       items: summarizedArr,
  //*       shipment_cost: shipmentCost, // ! check if shipment cost comes from firebase or is hard coded
  //*     });
  //*     console.log("entered try createPreference()") // ! code broken in post
  //*     const { id } = post.data;

  //*     return id;
  //*   } catch (error) {
  //*     console.log(error);
  //*   }
  //* };

  const createPreference = async () => {
    try {
      let summarizedArr = cart.map((prod) => {
        return {
          title: prod.title,
          unit_price: prod.unit_price,
          quantity: prod.quantity,
        };
      });

      const response = await axios.post(
        "http://localhost:8000/create_preference",
        {
          items: summarizedArr,
          shipment_cost: selectedCityShipmentInfo.shipment,
        }
      );

      let { id } = response.data;

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  // handles succesfull payment. post order to fb, reduce stock, clear cart and order in local storage
  useEffect(() => {
    let order = JSON.parse(localStorage.getItem("order"));

    if (paramValue === "approved") {
      console.log("ln 99. param value ok, value=", paramValue); //! remove later
      let orderCollection = collection(db, "orders");
      addDoc(orderCollection, { ...order, date: serverTimestamp() })
        .then((res) => {
          setOrderId(res.id);
        })
        .catch((err) => console.log(err));

      order.products.forEach((el) => {
        updateDoc(doc(db, "products", el.id), {
          stock: el.stock - el.quantity,
        });
      });

      clearCart();
    } else {
      console.log("paramValue= ", paramValue);
    }

    localStorage.removeItem("order");
  }, [paramValue]);

  console.log("ln 121. orderId= ", orderId); //! remove later
  console.log("ln 122. preferenceId= ", preferenceId); //! remove later

  // handles buy request. stores id given by mercadopago. creates order obj in local storage
  const handleBuy = async () => {
    const storeOrder = {
      name: userData.nombre,
      lastName: userData.apellido,
      phone: userData.telefono,
      email: userData.correo,
      products: cart,
      total: totalPrice + selectedCityShipmentInfo.shipment,
      date: `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
    };

    localStorage.setItem("order", JSON.stringify(storeOrder));

    try {
      const id = await createPreference();
      if (id) {
        setPreferenceId(id); // - preference id generado cuando sale boton mp
      }
    } catch (error) {
      console.log(error);
    }
  };

  let handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const data = { handleChange, handleBuy, Wallet, preferenceId, orderId };

  return (
    <>
      <Checkout data={data} />
    </>
  );
};

export default CheckoutContainer;
