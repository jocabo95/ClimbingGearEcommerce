import DashboardButton from "../../../common/dashboardButton/DashboardButton";
import "../dashboards.css";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MagFormContainer from "./magForm/MagFormContainer";

const MagDashboard = ({ data }) => {
  const { handleOpen, deleteMag, magsList, handleClose, style, open } =
    data;

  const buttonData = {
    buttonText: "Agregar publicación",
    handleClick: handleOpen,
  };

  return (
    <Box>
      <p className="dashboard-section-title">PUBLICACIONES</p>

      {/* add city*/}
      <DashboardButton data={buttonData} />

      {/* UI mags */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell align="center">Publicación</TableCell>
              <TableCell align="center">Portada</TableCell>
              <TableCell align="center">Fotos</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {magsList?.map((mag) => (
              <TableRow
                key={mag.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {mag.title} - {mag.date}
                </TableCell>
                <TableCell align="center">
                  <img src={mag.portada} style={{ width: "100px" }} />
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                  >
                    {mag.fotos.map((foto) => (
                      <img key={foto} src={foto} width={"95px"} />
                    ))}
                  </Box>
                </TableCell>

                <TableCell align="center">
                  <IconButton onClick={() => handleOpen(mag)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => deleteMag(mag)}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* MODAL */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MagFormContainer
              data={data}
            />
          </Box>
        </Modal>
      </TableContainer>
    </Box>
  );
};

export default MagDashboard;
