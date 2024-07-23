import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const DashboardContainer = () => {

  const [categories, setCategories] = useState([]);

  // get sections (names) that are modifiable from dashboard (products, orders, shipment...)
  useEffect(() => {
    let refCategroiesCollection = collection(db, "dashboardCategories");
    getDocs(refCategroiesCollection)
      .then((res) => {
        let categoriesArr = res.docs.map((el) => {
          return { ...el.data() };
        });
        setCategories(categoriesArr);
      })
      .catch((err) => console.log(err));
  }, []);

  // modal style (from mui)
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const data = {
    categories,
    modalStyle
  }

  return <Dashboard data={data}/>;
};

export default DashboardContainer;
