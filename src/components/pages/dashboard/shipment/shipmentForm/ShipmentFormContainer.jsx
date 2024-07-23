import { useState } from "react";
import ShipmentForm from "./ShipmentForm";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebaseConfig";

const ShipmentFormContainer = ({ data }) => {
  const { cityToEdit, handleClose, setDbChange } = data;

  const [cityShipmentInfo, setCityShipmentInfo] = useState({
    city: "",
    shipment: 0,
    deliveryDays: 0,
  });

  // HANDLECHANGE
  let handleChange = (e) => {
    if (cityToEdit) {
      setCityShipmentInfo({
        ...cityToEdit,
        [e.target.name]: e.target.value,
      });
    } else {
      setCityShipmentInfo({
        ...cityShipmentInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  // SUBMIT
  let handleSubmit = (e) => {
    e.preventDefault();

    let shipmentCollection = collection(db, "shipment");

    if (cityToEdit) {

      const editedCityInfo = {
        ...cityShipmentInfo,
        shipment: +cityShipmentInfo.shipment,
        deliveryDays: +cityShipmentInfo.deliveryDays

      }

      console.log('info sent to fb= ', editedCityInfo);

      updateDoc(doc(shipmentCollection, cityToEdit.id), editedCityInfo)
        .then(()=>{
          handleClose()
          setDbChange(true)
        })
        .catch((err)=> console.log(err))
    } else {
     
      addDoc(shipmentCollection, cityShipmentInfo)
        .then(()=>{
          handleClose()
          setDbChange(true)
        })
        .catch((err)=>console.log(err))
    }
  };

  const data1={
    ...data,
    handleChange,
    handleSubmit,
    handleClose
  }

  return <ShipmentForm data={data1} />;
};

export default ShipmentFormContainer;
