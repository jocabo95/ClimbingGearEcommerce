import { useEffect, useState } from "react";
import ProjectsDashboard from "./ProjectsDashboard"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const ProjectsDashboardContainer = ({data}) => {
  const { modalStyle } = data;

  const [projectsList, setProjectsList] = useState([]); // mags variable
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [newProject, setNewProject] = useState(null)
  const [dbChange, setDbChange] = useState(false); // var that tracks changes to db
  const [open, setOpen] = useState(false); // true=> modal opens
 
  // bring projects from fb
  useEffect(() => {

    setDbChange(false);
    const projCollection = collection(db, "projects");

    getDocs(projCollection)
      .then((res) => {
        const listArr = res.docs.map((proj) => {
          return { ...proj.data(), id: proj.id };
        });

        setProjectsList(listArr);
      })
      .catch((err) => console.log(err));
  }, [dbChange]);

  // open modal. cityInfo refers to city user wants to edit
  let handleOpen = (projInfo) => {
    setProjectToEdit(projInfo);
    setOpen(true);
  };

  //close modal
  let handleClose = () => {
    setOpen(false);
    setProjectToEdit(null);
  };

  // delete proj form fb
  let deleteProject = async (proj) => {
    let project = doc(db, "projects", proj.id);
    deleteDoc(project);

    setDbChange(true);
  };

  const data1 = {
    ...data,
    handleClose,
    handleOpen,
    deleteProject,
    modalStyle,
    projectsList,
    projectToEdit,
    newProject,
    setNewProject,
    setProjectToEdit,
    setDbChange,
    open
  };

  return <ProjectsDashboard data={data1} />;
}

export default ProjectsDashboardContainer