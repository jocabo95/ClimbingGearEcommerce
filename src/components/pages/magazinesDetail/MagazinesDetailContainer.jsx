import { useEffect, useState } from "react";
import MagazinesDetail from "./MagazinesDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const MagazinesDetailContainer = () => {

  const [magOnDisplay, setMagOnDisplay] = useState({});

  const { magId } = useParams();

  useEffect(() => {
    let desiredDoc = doc(db, "magazines", magId);

    getDoc(desiredDoc)
      .then((res) => {
        setMagOnDisplay({ ...res.data(), id: res.id });
      })
      .catch((err) => console.log(err));
  }, [magId]);


  const data ={
    magOnDisplay
  }

  return (
    <MagazinesDetail data={data} />
  )
}

export default MagazinesDetailContainer