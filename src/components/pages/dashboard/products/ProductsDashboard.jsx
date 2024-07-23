import '../dashboards.css'
import { Box, IconButton, Modal } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductFormContainer from "../products/productForm/ProductFormContainer";
import DashboardButton from "../../../common/dashboardButton/DashboardButton";

const ProductsDashboard = ({ data }) => {
  const {
    products,
    removeProd,
    style,
    handleClose,
    handleOpen,
    open,
    setDbChange,
    productTobeEdited,
    setproductTobeEdited,
  } = data;

  const buttonData = {buttonText: 'Agregar producto', handleClick: handleOpen}

  return (
    <Box>
      <p className="dashboard-section-title">PRODUCTOS</p>

      {/* add product */}
      <DashboardButton data={buttonData} />

      {/* UI products */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell align="center">Producto</TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Categoría</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={product.img}
                    style={{ width: "50px", height: "50px" }}
                  />
                </TableCell>
                <TableCell align="center">{product.id}</TableCell>
                <TableCell align="center">
                  ${Intl.NumberFormat().format(product.unit_price)}
                </TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleOpen(product)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => removeProd(product)}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ProductFormContainer
              handleClose={handleClose}
              setDbChange={setDbChange}
              productTobeEdited={productTobeEdited}
              setproductTobeEdited={setproductTobeEdited}
            />
          </Box>
        </Modal>
      </TableContainer>
    </Box>
  );
};

export default ProductsDashboard;
