import { useState } from "react";
import ProjectsForm from "./ProjectsForm";
import { db, storage, uploadImg } from "../../../../../firebaseConfig";
import { deleteObject, ref } from "firebase/storage";
import { collection, doc, updateDoc } from "firebase/firestore";

const ProjectsFormContainer = ({ data }) => {
  const { projectToEdit, setProjectToEdit, handleClose, setDbChange } = data;

  // var that stores wether img is uploading
  const [uploadDone, setUploadDone] = useState(false);

  // var that determines if img upload is done
  const [uploadInProgress, setUploadInProgress] = useState(false);

  // var that stores proejct info from form
  const [mainImg, setMainImg] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  // var that stores info of project
  const [newProjectInfo, setNewProjectInfo] = useState({
    title: "",
    mainImg: "",
    img1: "",
    img2: "",
  });

  // handleChange form
  let handleChange = (e) => {
    if (projectToEdit) {

      setProjectToEdit({
        ...projectToEdit,
        [e.target.name]: e.target.value,
      });
    } else {

      setNewProjectInfo({
        ...newProjectInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  // handle image upload. imgKey == projectToEdit.mainImg || .img1 || .img2
  let handleImgFile = async (imgFile, imgKey) => {
    // handles loaders
    setUploadInProgress(true);
    setUploadDone(false);

    try {
      if (projectToEdit) {
        // delete img from firebase
        const imgRef = ref(storage, projectToEdit[imgKey]);
        await deleteObject(imgRef);

        console.log('deleted image');
        
        // upload new img to firebase
        let imgUrl = await uploadImg(imgFile);
        console.log('uploaded image to fb');

        //update productTobeEdited
        setProjectToEdit({ ...projectToEdit, [imgKey]: imgUrl });

        setUploadInProgress(false);
        setUploadDone(true);
      } else {
        console.log(" create new project");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    setUploadDone(false);

    let projectsCollection = collection(db, "projects");

    if (projectToEdit) {
      updateDoc(doc(projectsCollection, projectToEdit.id), projectToEdit)
        .then(() => {
          handleClose();
          setDbChange(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const data1 = {
    handleChange,
    handleImgFile,
    handleSubmit,
    setMainImg,
    mainImg,
    setImg1,
    img1,
    setImg2,
    img2,
    projectToEdit,
    uploadDone,
    uploadInProgress,
    handleClose,
    uploadDone
  };

  return <ProjectsForm data={data1} />;
};

export default ProjectsFormContainer;
