import { useEffect, useState } from "react";
import MagDashboard from "./MagDashboard";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const MagDashboardContainer = ({data}) => {
  const { modalStyle } = data;

  const [magsList, setMagList] = useState([]); // var to store mags
  const [dbChange, setDbChange] = useState(false); // db change
  const [magToEdit, setMagToEdit] = useState(null); // var to save mag to edit
  const [newMag, setNewMag] = useState(null); // var to save new mag
  const [open, setOpen] = useState(false); // true=> modal opens

  // bring mags from fb
  useEffect(() => {
    setDbChange(false);
    const magsCollection = collection(db, "magazines");

    getDocs(magsCollection)
      .then((res) => {
        const magsArr = res.docs.map((el) => {
          return { ...el.data(), id: el.id };
        });

        setMagList(magsArr);
      })
      .catch((err) => console.log(err));
  }, [dbChange]);

  // open modal. cityInfo refers to city user wants to edit
  let handleOpen = (magInfo) => {
    setMagToEdit(magInfo);
    setOpen(true);
  };

  //close modal
  let handleClose = () => {
    setOpen(false);
    setMagToEdit(null);
  };

  // delete mag form fb
  let deleteMag = async (mag) =>{
    let magDoc = doc(db, "magazines", mag.id)
    deleteDoc(magDoc)

    setDbChange(true)
  }

  const data1 = {
    magsList,
    modalStyle,
    setDbChange,
    magToEdit,
    setMagToEdit,
    newMag,
    setNewMag,
    handleOpen,
    handleClose,
    deleteMag,
    open 
  };
  return <MagDashboard data={data1} />;
};

export default MagDashboardContainer;
