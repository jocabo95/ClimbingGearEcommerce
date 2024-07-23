import '../dashboards.css'
import DashboardButton from "../../../common/dashboardButton/DashboardButton";
import ShipmentFormContainer from "./shipmentForm/ShipmentFormContainer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Box,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ShipmentDashboard = ({ data }) => {
  const {
    shipmentData, // brings all cities shipment info from db
    deleteCity,
    handleOpen, // opens Modal
    handleClose, // closes modal
    open,
    modalStyle,
  } = data;

  const buttonData = {
    buttonText: "Agregar Ciudad",
    handleClick: handleOpen,
  };

  return (
    <Box>
      <p className="dashboard-section-title">COSTOS DE ENVIO</p>

      {/* add city*/}
      <DashboardButton data={buttonData} />

      {/* UI shippment info */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell align="center">Ciudad</TableCell>
              <TableCell align="center">Costo envío</TableCell>
              <TableCell align="center">entrega (dias)</TableCell>
              <TableCell align="center">Acciones </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipmentData?.map((el) => (
              <TableRow
                key={el.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="el" align="center">
                  {el.city}
                </TableCell>
                <TableCell align="center">
                  $ {Intl.NumberFormat().format(el.shipment)}
                </TableCell>
                <TableCell align="center">{el.deliveryDays}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleOpen(el)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => deleteCity(el)}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <ShipmentFormContainer data={data} />
        </Box>
      </Modal>
    </Box>
  );
};

export default ShipmentDashboard;
