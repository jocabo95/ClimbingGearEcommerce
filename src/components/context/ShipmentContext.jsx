import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react"
import { db } from "../../firebaseConfig";


export const ShipmentContext = createContext()

const ShipmentContextComponent = ({children}) => {
  const [allCitiesShipmentInfo, setAllCitiesShipmentInfo] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Bogotá"); // city selected in <Select />
  const [selectedCityShipmentInfo, setSelectedCityShipmentInfo] = useState();

  // fetch shipment info of all cities
  useEffect(() => {
    const refShipmentInfo = collection(db, "shipment");
    getDocs(refShipmentInfo).then((res) => {
      const arr = res.docs.map((el) => {
        return { ...el.data(), id: el.id };
      });

      setAllCitiesShipmentInfo(arr);
    });
  }, []);

  // get shipment value of selectedCity
  useEffect(() => {
    if (allCitiesShipmentInfo) {
      const shipmentValue = allCitiesShipmentInfo.find((el) => {
        return el.city === `${selectedCity}`;
      });

      setSelectedCityShipmentInfo(shipmentValue);
    }
  }, [selectedCity, allCitiesShipmentInfo]);

  // capture city value from <Select />
  let onChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const data = {
    allCitiesShipmentInfo,
    setSelectedCity,
    selectedCity,
    selectedCityShipmentInfo,
    onChange,
  };

  return (
    <ShipmentContext.Provider value={data}>{children}</ShipmentContext.Provider>
  );
}

export default ShipmentContextComponent