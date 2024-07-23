import { useEffect, useState } from "react"
import Magazines from "./Magazines"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../firebaseConfig"

const MagazinesContainer = () => {

  const [publications, setPublications] = useState([])

  useEffect(()=>{
    const refMagazines = collection(db, 'magazines')
    getDocs(refMagazines)
      .then((res)=>{

        let magazinesArr = res.docs.map((el)=>{
          return {...el.data(), id: el.id}
        })

        setPublications(magazinesArr)
      })
      .catch((err)=> console.log(err))
  }, [])

  console.log("publications", publications);

  const data ={
    publications
  } 

  return (
    <Magazines data={data}/>
  )
}

export default MagazinesContainer