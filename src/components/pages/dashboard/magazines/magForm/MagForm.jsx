import { Box, Button, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../../dashboards.css";

const MagForm = ({data}) => {

  const {handleClose, handleSubmit, setMagCover, magToEdit} = data
  
  return (
    <Box className="dashboard-form-container">
      <Box sx={{ textAlign: "right", mb: "1rem" }}>
        <IconButton color="black" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <form className="dashboard-form">
        <Typography variant="h5">Costo de Envío</Typography>
        <TextField
          label="editor"
          defaultValue={magToEdit?.title}
          variant="outlined"
          name="publisher"
          // onChange={handleChange}
        />
        <TextField
          label="fecha publicación"
          defaultValue={magToEdit?.date}
          variant="outlined"
          name="date"
          // onChange={handleChange}
        />
        <p>Portada</p>
        <TextField
          type="file"
          name="cover"
          onChange={(e) => setMagCover(e.target.files[0])}
        />
        <Button
          color="secondary"
          type="button"
          onClick={() => handleImgFile(imgFile)}
        >
          Cargar imagen
        </Button>

        <Button type="submit" onClick={handleSubmit}>
          Finalizar
        </Button>
      </form>
    </Box>
  );
};

export default MagForm;
