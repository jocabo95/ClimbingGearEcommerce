import { useState } from "react"
import MagForm from "./magForm"
import { deleteObject, ref } from "firebase/storage"
import { storage } from "../../../../../firebaseConfig"

const MagFormContainer = ({data}) => {

  const {magToEdit, setMagToEdit} = data

  const [magInfo, setMagInfo] = useState({
    publisher: '',
    date: '',
    cover: ''
  })

  const [magCover, setMagCover] = useState(null)

  // var that stores wether img is uploading
  const [uploadDone, setUploadDone] = useState(false)

  // var that determines if upload is done
  const [uploadInProgress, setUploadInProgress] = useState(false)

  // handleChange form
  let handleChange =(e)=>{
    if(magToEdit){
      const updatedMag = {
        ...magToEdit,
        [e.target.name]: e.target.value
      }

      setMagToEdit(updatedMag)

    }else{
      const newMag = {
        ...magInfo,
        [e.target.name]: e.target.value
      }

      setMagInfo(newMag)
    }
  }

  // handle img
  let handleImgFile = async(imgFile, textFieldName, targetValue) =>{

    setUploadInProgress(true)
    setUploadDone(false)

    try {

      if (magToEdit) {

        // delete img from fb
        const imgRef = ref(storage, `magazines/${magToEdit.publisher}-${magToEdit.date}/${magToEdit[targetValue]}`);
        await deleteObject(imgRef);

        // add new img to fb

        // update mag information
      } else {
        console.log('mag will be created');
      }

    } catch (error) {
      console.log(error);
    }
  }
  // handlesubmit

  const data1={
    ...data,
    handleChange,
    handleImgFile,
    setMagCover
  }
  
  return (
    <MagForm data={data1}/>
  )
}

export default MagFormContainer