import { Box, Button, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../../dashboards.css";

const ProjectsForm = ({data}) => {

  const {
    handleClose,
    handleChange,
    handleSubmit,
    handleImgFile,
    setMainImg,
    mainImg,
    setImg1,
    img1,
    setImg2,
    img2,
    projectToEdit,
    uploadDone
  } = data;

  return (
    <Box className="dashboard-form-container">
      <Box sx={{ textAlign: "right", mb: "1rem" }}>
        <IconButton color="black" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <form className="dashboard-form">
        <Typography variant="h5">Costo de Envío</Typography>

        {/* project title */}
        <TextField
          label="proyecto"
          defaultValue={projectToEdit?.title}
          variant="outlined"
          name="title"
          onChange={handleChange}
        />

        {/* main img */}
        <p>Portada</p>
        <TextField
          type="file"
          name="mainImg"
          onChange={(e) => setMainImg(e.target.files[0])}
        />
        {mainImg && (
          <Button
            color="secondary"
            type="button"
            onClick={() => handleImgFile(mainImg, "mainImg")}
          >
            Cargar Imagen Principal
          </Button>
        )}

        {/* img1*/}
        <p>Foto #1</p>
        <TextField
          type="file"
          name="img1"
          onChange={(e) => setImg1(e.target.files[0])}
        />
        {img1 && (
          <Button
            color="secondary"
            type="button"
            onClick={() => handleImgFile(img1, "img1")}
          >
            Cargar foto #1
          </Button>
        )}

        {/* img2*/}
        <p>Foto #1</p>
        <TextField
          type="file"
          name="img2"
          onChange={(e) => setImg2(e.target.files[0])}
        />
        {img2 && (
          <Button
            color="secondary"
            type="button"
            onClick={() => handleImgFile(img2, "img2")}
          >
            Cargar foto #2
          </Button>
        )}

        {/* SUBMIT */}
        {uploadDone && (
          <>
            <Button type="submit" onClick={handleSubmit}>
              Finalizar
            </Button>
            <Box>
              <Typography>STATUS: </Typography>
              <CheckCircleIcon sx={{bgcolor:"green"}}/>
            </Box>
          </>
        )}
      </form>
    </Box>
  );
};

export default ProjectsForm;
