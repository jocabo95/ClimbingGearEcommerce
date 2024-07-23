import { Box, Button, CircularProgress, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import '../../dashboards.css'

const ProductForm = ({ data }) => {
  const {
    handleSubmit,
    handleChange,
    imgFile,
    setImgFile,
    progressUpload,
    uploadDone,
    handleImgFile,
    productTobeEdited,
    handleClose
  } = data;

  return (
    <Box className="dashboard-form-container">
      <Box sx={{ textAlign: "right", mb: "1rem" }}>
        <IconButton color="black" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <Typography variant="h5">Agregar / editar productos</Typography>
        <TextField
          label="producto"
          defaultValue={productTobeEdited?.title}
          variant="outlined"
          name="title"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="descripción"
          defaultValue={productTobeEdited?.description}
          variant="outlined"
          name="description"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="categoria"
          defaultValue={productTobeEdited?.category}
          variant="outlined"
          name="category"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="stock"
          defaultValue={productTobeEdited?.stock}
          variant="outlined"
          name="stock"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="precio"
          defaultValue={productTobeEdited?.unit_price}
          variant="outlined"
          name="unit_price"
          onChange={handleChange}
        ></TextField>
        <TextField
          type="file"
          onChange={(e) => setImgFile(e.target.files[0])}
        />

        {imgFile ? (
          progressUpload ? (
            <CircularProgress />
          ) : uploadDone ? (
            <Button type="submit">Finalizar</Button>
          ) : (
            <Button
              color="secondary"
              type="button"
              onClick={() => handleImgFile(imgFile)}
            >
              Cargar imagen
            </Button>
          )
        ) : null}
      </form>
    </Box>
  );
};

export default ProductForm;
