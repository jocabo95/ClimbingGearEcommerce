import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import ShipmentDashboard from "./ShipmentDashboard";

const ShipmentDashboardContainer = (data) => {
  const [shipmentData, setShipmentData] = useState([]);
  const [dbChange, setDbChange] = useState(false); // false=> db hasnt changed, true=> db was modified, re render dashboard
  const [open, setOpen] = useState(false); // true=> modal opens
  const [cityToEdit, setCityToEdit] = useState(null); // stores info of city to edit
  const [newCityInfo, setNewCityInfo] = useState(null) // stores data of new city

  const { modalStyle } = data;

  // Get shipment info from firebase
  useEffect(() => {
    setDbChange(false)

    const shipmentCollection = collection(db, "shipment");
    getDocs(shipmentCollection)
      .then((res) => {
        const shipmentArr = res.docs.map((el) => {
          return { ...el.data(), id: el.id };
        });

        setShipmentData(shipmentArr);
      })
      .catch((err) => console.log(err));
  }, [dbChange]);

  // Remove city from db
  let deleteCity = async (city) => {
    let cityDoc = doc(db, "shipment", city.id);
    deleteDoc(cityDoc);

    setDbChange(true)
  };

  // open modal. cityInfo refers to city user wants to edit
  let handleOpen = (cityInfo) => {
    setCityToEdit(cityInfo);
    setOpen(true);
  };

  //close modal
  let handleClose = () => {
    setOpen(false);
    setCityToEdit(null);
  };

  const data1 = {
    shipmentData,
    deleteCity,
    handleOpen,
    handleClose,
    open,
    cityToEdit,
    setDbChange,
    modalStyle,
    setCityToEdit,
    setNewCityInfo,
    newCityInfo,
  };


  return <ShipmentDashboard data={data1} />;
};

export default ShipmentDashboardContainer;
