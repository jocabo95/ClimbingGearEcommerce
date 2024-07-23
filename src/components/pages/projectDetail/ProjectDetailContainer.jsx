import { useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

const ProjectDetailContainer = () => {
  const [projectOnDisplay, setProjectnDisplay] = useState({});
  const { projectId } = useParams();

  useEffect(() => {
    let desiredDoc = doc(db, "projects", projectId);

    getDoc(desiredDoc)
      .then((res) => {
        setProjectnDisplay({ ...res.data(), id: res.id });
      })
      .catch((err) => console.log(err));
  }, [projectId]);

  const data = {
    projectOnDisplay,
  };

  return <ProjectDetail data={data} />;
};

export default ProjectDetailContainer;
