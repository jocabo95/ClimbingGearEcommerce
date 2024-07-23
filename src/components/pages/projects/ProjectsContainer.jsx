import { useState } from "react"
import Projects from "./Projects"
import { useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../firebaseConfig"

const ProjectsContainer = () => {

  const [projects, setProjects]=useState([])

  useEffect(()=>{

    const projectsCollection = collection(db, "projects")
    getDocs(projectsCollection)
      .then((res)=>{
        let projectsArr = res.docs.map((el)=>{
          return {...el.data(), id: el.id}
        })

        setProjects(projectsArr)
      })
      .catch((err)=>console.log(err))

  },[])


  const data ={
    projects
  }

  return (
    <Projects data={data}/>
  )
}

export default ProjectsContainer